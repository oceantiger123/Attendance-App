import { Calendar } from "react-calendar";
//import AttendentCalendar from "./calendar";
import React, { useState} from 'react';
import "./Home.css"
import axios from "axios";
//import { Link } from "react-router-dom"

const Home = () => {
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState([]);
  
  const onChange = async(date) => {
    let curDate = date.toString().slice(4,15)
    const {data: msg} = await axios.get(`/api/dates/:id/:id/:id?date=${curDate}`);
    setDate(curDate);
    if(msg === "not existed"){
      const {data: dates} = await axios.get('/api/dates');
      await axios.post('/api/dates', {"id": dates.length+1, "date": curDate})
    } else{
      const {data: attendance} = await axios.get(`/api/dates/:id/:date?findDate=${curDate}`);
        if(attendance === 'Not Found') setAttendance([]);
        else setAttendance(attendance);
      }
    };

    return (
      <div className="home">
        <h1 style={{ textAlign: "center" }}>Welcome to Hall 7 Attendence Application</h1>
        <Calendar onChange={onChange}/>

        {attendance.length > 0 ? (

      <div>
          <h3>The following members attended on {date}:</h3>
              {attendance.map((attender)=>(
                <li key={attender.id}>
                  {attender.member.name} 
                </li>
              ))}
      </div>
      ) : (
        <h3 > NO ATTENDENCE on {date}</h3>  
      )
      }
      </div>
    )
  }
  
  export default Home;
  