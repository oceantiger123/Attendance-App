import axios from "axios";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./oneMember.css"

export const Onemember = () => {
    const {pathname} = useLocation();
    let myparam = pathname.slice(9);
    const [formData, setFormData] = useState({});
  
    const [member, setMember] = useState({});
    useEffect(()=>{
        (async()=>{
            const {data: member} = await axios.get(`/api/members/${myparam}`);
            setMember(member);
        })();
    }, [myparam]); 

    const handleChange = (event) => {
        setFormData({
          ...formData, 
          [event.target.name]: event.target.value
        })
      };

      const handleSubmit = async (event)=>{
        event.preventDefault();
        const {data: member}= await axios.put(`/api/members/${myparam}`, formData);
        setMember(member);
        setFormData({})
      };

      const handleDelete = async()=>{
        await axios.delete(`/api/members/${myparam}`);
        setMember({})
      };
    return(
        
        <div className="oneMemberComp">
          
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Member Name</label>
            <input name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="phone"> Member Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange}/>

            <button type="submit"> Update Member </button>
          </form>
          {/* <img className="resize" src={member.image} alt=""/> */}
           <h3>{member.name}</h3>
         
           <button onClick={handleDelete}>
             Delete this member
           </button>
          
        </div>       

    )
}
