import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from "axios";
import { Link } from "react-router-dom"

const AttendentCalendar = () => {
  
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  
  let curDate = date.toString().slice(4,15)
  useEffect(()=> {
    (async()=> {
      const {data: date} = await axios.get(`/api/dates/:id/:date?findDate=${curDate}`);
      setDates(date);
    })();
  }, [curDate]);
  
  const onChange = date => {
    setDate(date);
  }
  return (
    <div>    
      {dates.length > 0 ? (
        <Link to={`/dates/${dates[0].id}`}>
          <Calendar onChange={onChange} value={date}/>
        </Link>
      ) : (
        
        <Calendar onChange={onChange} value={date}/>
      
      )
      }
    </div>
  );
}


export default AttendentCalendar

 