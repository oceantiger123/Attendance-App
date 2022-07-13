import { Link } from "react-router-dom"
//import {useNavigate} from "react-router-dom"
//import SingleDateAttendance from "../singleDateAttended/attendance"

export const Date = (props) => {
    
    //console.log("props =>", props)
    return(
        
        <div>
           <Link to={`/dates/${props.dateId}`}>

            {props.date}
           </Link>
           
        </div>       

    )
}

// onClick={() => {handleSubmit()}}