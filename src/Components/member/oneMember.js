import axios from "axios";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

export const Onemember = () => {
    const {pathname} = useLocation();
    const myparam = pathname.slice(9);
    console.log("pathname", myparam)
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
      }
      console.log("formData", formData)
      const handleSubmit = async (event)=>{
        event.preventDefault();
        const {data: member}= await axios.put(`/api/members/${myparam}`, formData);
        //console.log('daata', data)
        setMember(member)
        setFormData({})
      }
    return(
        
        <div className="oneMemberComp">
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Member Name</label>
            <input name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="phone"> Member Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange}/>

            <button type="submit"> Update Member </button>
          </form>

           <p>{member.name}</p>
           
        </div>       

    )
}
