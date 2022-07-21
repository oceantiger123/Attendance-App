import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./member.css";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
      (async()=>{
        const {data: member} = await axios.get('/api/members');
        setMembers(member);
      })();
    }, []);

    const handleChange = (event) => {
      setFormData({
        ...formData, 
        [event.target.name]: event.target.value
      })
    }
    const handleSubmit = async (event)=>{
      event.preventDefault();
      const {data: members}= await axios.post('/api/members', formData);
      setMembers(members);
      setFormData({})
    }
    return (
      
      <div className="memberComp">
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Member Name</label>
            <input name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="phone"> Member Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange}/>

            <button type="submit"> Add Member </button>
          </form>

          <h3>Total Number of Members: {members.length}</h3>
            {members.map((member) => (
              <Link to={`/members/${member.id}`} key={member.id}>
               <ul>
                 {member.name}
               </ul>
              </Link>
            ))}

           
      </div>
    )
  };

export default Members;