import axios from "axios";
import {useState, useEffect} from "react";

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
            <li key = {member.id}>{member.name}</li>) 
            )}
           
      </div>
    )
  };

export default Members;