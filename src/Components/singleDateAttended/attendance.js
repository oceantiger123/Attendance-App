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
  }, [myparam]);

  useEffect(() => {
    (async () => {
      const { data: notAttended } = await axios.get(
        `/api/attendance/${myparam}`
      );
      setNotAttendees(notAttended);
    })();
  }, [myparam]);

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    let formData = { memberId: event.target.value, dateId: myparam };
    await axios.post("/api/attendance", formData);
    const { data: attendances } = await axios.get(`/api/dates/${myparam}`);
    setAttendance(attendances);
    const { data: notAttended } = await axios.get(`/api/attendance/${myparam}`);
    setNotAttendees(notAttended);
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    let memberId = event.target.value;
    await axios.delete(`/api/attendance/${memberId}/${myparam}`);
    const { data: attendances } = await axios.get(`/api/dates/${myparam}`);
    setAttendance(attendances);
    const { data: notAttended } = await axios.get(`/api/attendance/${myparam}`);
    setNotAttendees(notAttended);
  };

  return (
    <div className="attendanceComp">
      <div>
        <h3>
          The total of the following members attend on {state}:{" "}
          {attendance.length}{" "}
        </h3>
        {attendance.map((attender) => (
          <div key={attender.id}>
            <ul>{attender.name}</ul>
            <button onClick={handleSubmit2} value={attender.id}>
              Delete from attendance
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>
          The total of the following members NOT attend on {state}:{" "}
          {notAttendees.length}{" "}
        </h3>
        {notAttendees.map((attender) => (
          <div key={attender.id}>
            <ul>{attender.name}</ul>
            <button onClick={handleSubmit1} value={attender.id}>
              Add to attendance
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleDateAttendance;
