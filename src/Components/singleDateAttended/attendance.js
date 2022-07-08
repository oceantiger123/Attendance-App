import axios from "axios";
import {useState, useEffect} from "react";

const SingleDateAttendance = () => {

    const [attendance, setAttendance] = useState([]);

    useEffect(()=>{
        (async()=>{
            const {data: attendances} = await axios.get('/api/dates/1');
            //console.log("why=>", data)
            setAttendance(attendances);
        })();
    }, []); 

    return (
        <div>
            <h3>The following members attended:</h3>
            {attendance.map((attender)=>(
                <li>{attender["memberId"]}</li>
            ))}
        </div>

    )
}

export default SingleDateAttendance;