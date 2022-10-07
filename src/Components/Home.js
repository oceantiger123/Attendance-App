import { Calendar } from "react-calendar";
import React, { useState} from 'react';
import "./Home.css"
import axios from "axios";
import { Link } from "react-router-dom"

const Home = () => {
  const [date, setDate] = useState({});
  const [attendance, setAttendance] = useState([]);
  
  const onChange = async(date) => {
    let curDate = date.toString().slice(4,15)
    const {data: dateObj} = await axios.get(`/api/dates/:id/:id/:id?date=${curDate}`);
    if(dateObj === "not existed"){
      const {data: createdDate} = await axios.post('/api/dates', {"date": curDate});
      setDate(createdDate);
      setAttendance([])
    } else{
      const {data: attendance} = await axios.get(`/api/dates/${dateObj.id}`);
      setDate(dateObj)
      setAttendance(attendance);
      }
    };

    return (
      <div className="home">
        <h1 style={{ textAlign: "center" }}>Welcome to 14th Ave and 17th Ave Attendence Application</h1>
        <Calendar onChange={onChange}/>

        {attendance.length > 0 ? (

      <div>
          <h3>The total of following members attended on {date.date}: {attendance.length}</h3>
          <Link to={`/dates/${date.id}`} state={date.date}>
           <button style={{margin: "10px"}}>Edit Attendance</button>  
          </Link>
                <div style={{display: "flex", flexWrap: "wrap"}}>
            {attendance.map((member) => (
              <div style={{width: '100px', height: '100px', border: "solid", borderColor: "white"}} key={member.id}>
              <Link to={`/members/${member.id}`} key={member.id}>
               <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                 <img style={{ width: "30px", margin: "5px" }} src={member.image} alt="" />
              <label>{member.name}</label>
               </div>
              </Link>
              </div>
            ))}
            </div> 
      </div>
      ) : (
        <div>
          <h3 > NO ATTENDENCE Click on any day: {date.date}</h3>
          <Link to={`/dates/${date.id}`} state={date.date}>
           <button>Edit Attendance</button>  
          </Link>
        </div>
      )
      }
      </div>
    )
  }
  
  export default Home;
  