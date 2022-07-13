import axios from "axios";
import {useState, useEffect} from "react";
//import { Link } from "react-router-dom";
import { Onemember } from "./oneMember";

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(()=>{
      (async()=>{
        const {data: member} = await axios.get('/api/members');
        setMembers(member);
      })();
    }, []);
    
    return (
      
      <div className="memberComp">
          <h3>Number of members: {members.length}</h3>

            {members.map((member) => (
               <Onemember key={member.id} memberId={member.id} member={member.name} />
            ))}
           
      </div>
    )
  };

export default Members;