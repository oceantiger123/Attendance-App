import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Members from './member/member';

const AttendentCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
      setDate(date);
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date}/>
      {/* {console.log(date)} */}
      {date.toString()}
      {date.toString().includes("Sun") ? (
        <Members /> ) : ("Lord's table meeting is on Sunday only, please click on any Sunday")
      }
    </div>
  );
}

export default AttendentCalendar