import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./dates.css"

const Dates = () => {
    const [dates, setDates] = useState([]);

    useEffect(()=> {
        (async()=> {
            const {data: dates} = await axios.get('/api/dates');
            setDates(dates);
        })();
    }, []);

    return (
        <div className="datesComp">
            <h3>The following dates have been taken attandence.</h3>

            {dates.map((date)=> (

                <Link to={`/dates/${date.id}`} key={date.id}>
               <li>
                 {date.date}
               </li>
              </Link>
            ))}
        </div>
    )
}

export default Dates;