import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(()=>{
      (async()=>{
        const {data: members} = await axios.get('/api/members');
        setMembers(members);
      })();
    }, []);
    
    return (
      
      <div >
          <h3>Number of members: {members.length}</h3>

            {members.map((member) => (
              <Link to={`/members/${member.id}`}>
              
                <li key = {member.id}>{member.name}</li> 
              </Link>
            ))}
           
      </div>
    )
  };

export default Members;