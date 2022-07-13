import { Link } from "react-router-dom"
//import {useNavigate} from "react-router-dom"
//import SingleDateAttendance from "../singleDateAttended/attendance"

export const Onemember = (props) => {
    
    //console.log("props =>", props)
    return(
        
        <div>
           <Link to={`/members/${props.memberId}`}>

            {props.member}
           </Link>
           
        </div>       

    )
}
