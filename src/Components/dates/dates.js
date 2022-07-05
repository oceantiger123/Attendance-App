import axios from "axios";
import {useState, useEffect} from "react";

const Dates = () => {
    const [dates, setDates] = useState([]);

    useEffect(()=> {
        (async()=> {
            const {data: dates} = await axios.get('/api/dates');
            setDates(dates);
        })();
    }, []);


    return (
        <div>
            <h3>The following dates have been taken attandence.</h3>

            {dates.map((date)=> (
                <li key={date.id}>{date.date}</li>
            ))}
        </div>
    )
}

export default Dates;