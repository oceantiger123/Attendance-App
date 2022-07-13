import axios from "axios";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

const SingleDateAttendance = () => {
    const {pathname} = useLocation();

    const myparam = pathname.slice(7);
    console.log('location', pathname)
    const [attendance, setAttendance] = useState([]);
    
    useEffect(()=>{
        (async()=>{
            const {data: attendances} = await axios.get(`/api/dates/${myparam}`);
        
            setAttendance(attendances);
        })();
    }, [myparam]); 
    
    return (
        <div>
            <h3>The following members attended:</h3>
            {attendance.map((attender)=>(
                <li key={attender.id}>{attender.member.name}</li>
            ))}
        </div>

    )
}

export default SingleDateAttendance;