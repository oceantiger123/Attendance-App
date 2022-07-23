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
          <h3>The following members attended on {date.date}:</h3>
          <Link to={`/dates/${date.id}`} state={date.date}>
           <button>Edit Attendance</button>  
          </Link>
              {attendance.map((attender)=>(
                <li key={attender.id}>
                  {attender.name} 
                </li>
              ))}
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
  