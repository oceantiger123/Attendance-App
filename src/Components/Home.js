import { Calendar } from "react-calendar";
//import AttendentCalendar from "./calendar";
import React, { useState, useEffect } from 'react';
import "./Home.css"
import axios from "axios";
//import { Link } from "react-router-dom"

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([]);
  
  let curDate = date.toString().slice(4,15)
  useEffect(()=> {
    (async()=> {
      const {data: attendance} = await axios.get(`/api/dates/:id/:date?findDate=${curDate}`);
      if(attendance === 'Not Found')setAttendance([]);
      else setAttendance(attendance);
    })();
  }, [curDate]);

  const onChange = date => {
    setDate(date);
  }

    return (
      <div className="home">
        <h1 style={{ textAlign: "center" }}>Welcome to Hall 7 Attendence Application</h1>
        <Calendar onChange={onChange} value={date}/>

        {attendance.length > 0 ? (

      <div>
          <h3>The following members attended on {curDate}:</h3>
              {attendance.map((attender)=>(
                <li key={attender.id}>
                  {attender.member.name} 
                </li>
              ))}
      </div>
      ) : (
        <h3 > NO ATTENDENCE on {curDate}</h3>  
      )
      }
      </div>
    )
  }
  
  export default Home;
  // <AttendentCalendar/>