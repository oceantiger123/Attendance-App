import axios from "axios";
import {useState, useEffect} from "react";
//import { Link } from "react-router-dom";
import { Date } from "./date";
//import SingleDateAttendance from "../singleDateAttended/attendance";

const Dates = () => {
    const [dates, setDates] = useState([]);

    useEffect(()=> {
        (async()=> {
            const {data: date} = await axios.get('/api/dates');
            setDates(date);
        })();
    }, []);

    //console.log("need key for date", props)
    return (
        <div>
        
            <h3>The following dates have been taken attandence.</h3>

            {dates.map((date)=> (

                <Date key={date.id} dateId={date.id} date={date.date} />

                // <Link to={`/dates/${date.id}`}>
                //   <li key={date.id}>{date.date}</li>
                //   {/* <SingleDateAttendance dateId = {date.id} /> */}
                  
                // </Link>
                
            ))}
        </div>
    )
}

export default Dates;