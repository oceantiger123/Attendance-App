import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./attendance.css";

const SingleDateAttendance = () => {
  const { pathname, state } = useLocation();
  const myparam = pathname.slice(7);

  const [attendance, setAttendance] = useState([]);
  const [notAttendees, setNotAttendees] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: attendances } = await axios.get(`/api/dates/${myparam}`);
      setAttendance(attendances);
    })();
    (async () => {
      const { data: notAttended } = await axios.get(
        `/api/attendance/${myparam}`
      );
      setNotAttendees(notAttended);
    })();
  },[myparam]);

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    let formData = notAttendees.reduce((pre, curMember)=> {
      if(curMember.isChecked){
        let curForm = {"memberId": curMember.id, "dateId": myparam};
        pre = [...pre, curForm];
      }
      return pre
    }
    ,[]);
    await axios.post("/api/attendance", formData);
    const { data: attendances } = await axios.get(`/api/dates/${myparam}`);
    setAttendance(attendances);
    const { data: notAttended } = await axios.get(`/api/attendance/${myparam}`);
    setNotAttendees(notAttended);
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    let membersToDelete=attendance.filter(member=>member.isChecked===true);
    await axios.delete(`/api/attendance/${myparam}`, {data: membersToDelete})
    const { data: attendances } = await axios.get(`/api/dates/${myparam}`);
    setAttendance(attendances);
    const { data: notAttended } = await axios.get(`/api/attendance/${myparam}`);
    setNotAttendees(notAttended);
  };
  const toggleAttended = (event)=>{
      const {value, checked} = event.target;
      if(value==="allSelect"){
        let tempAttended=attendance.map(attender=>{
          return {...attender, isChecked: checked};
        })
        setAttendance(tempAttended);
      } else {
        let tempAttended=attendance.map((attender)=>attender.name===value ? {...attender, isChecked: checked} : attender);
        setAttendance(tempAttended)
      }
  };
    const toggleUnattended = (event)=>{
      const {value, checked} = event.target;
      if(value==="selectAll"){
        let tempUnattended=notAttendees.map((member)=>{
          return {...member, isChecked: checked}
      });
        setNotAttendees(tempUnattended);
      } else{
        let tempUnattended = notAttendees.map((member)=>member.name === value ? {...member, isChecked: checked} : member);
        setNotAttendees(tempUnattended);
      }
    }
  return (
    <div className="attendanceComp">
      <div style={{width: '1000px', height: '500px'}}>
        <fieldset>
          <h3>
          The total of the following members attended on {state}:{" "}
          {attendance.length}{" "}
        </h3>
          <legend>Using checkbox to choose to remove from the attendance</legend>
        <input 
          type="checkbox"
          name="attended-check-input" 
          value="allSelect"
          onChange={toggleAttended}
          checked={attendance.filter((attender)=>attender?.isChecked !==true).length < 1}
           /> Select All<br/>
     <hr></hr>
     <div style={{display: "flex", flexWrap: "wrap"}}>
        {attendance.map((attender) => (
          <div style={{width: '100px', height: '110px', border: "solid", borderColor: "white", display: "flex", flexDirection: "column", alignItems: "center"}} key={attender.id}>
            <input 
              type="checkbox" 
              name="attended-check-input" 
              value={attender.name}
              onChange={toggleAttended}
              checked={attender?.isChecked || false}
              />
              <img style={{ width: "30px", margin: "5px" }} src={attender.image} alt="" />
              <label>{attender.name}</label>
          </div>
        ))}
        </div>
        <hr></hr>
        <button onClick={handleSubmit2}>
              Delete from attendance
            </button>
      </fieldset>
      </div>
      <div style={{width: '1000px', height: '500px'}}>
        <fieldset>
          <legend>Using checkbox to choose to add to the attendance</legend>
        <h3>
          The total of the following members are NOT in attendance on {state}:{" "}
          {notAttendees.length}{" "}
        </h3>
          <input 
            type="checkbox"
            name="unattended-member-input"
            value="selectAll"
            onChange={toggleUnattended}
            checked={notAttendees.filter((member)=>member?.isChecked !== true).length < 1}
            />Select All
          <br/>
        <hr></hr>
        <div style={{display: "flex", flexWrap: "wrap"}}>
        {notAttendees.map((attender) => (
          <div style={{width: '100px', height: '110px', border: "solid", borderColor: "white", display: "flex", flexDirection: "column", alignItems: "center"}} key={attender.id}>
            <input 
              type="checkbox"
              name="unattended-member-input"
              value={attender.name}
              onChange={toggleUnattended}
              checked={attender?.isChecked || false}
              /> 
              <img style={{ width: "30px", margin: "5px" }} src={attender.image} alt="" />
              <label>{attender.name}
                </label>
          </div>
        ))}
          </div>
        <hr></hr>
        <button onClick={handleSubmit1}>
            Add to attendance
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default SingleDateAttendance;
