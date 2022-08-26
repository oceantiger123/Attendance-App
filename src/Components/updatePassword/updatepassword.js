import { useState } from "react";
import "./updatepassword.css";

const Updatepassword = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const handleChange = (event)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(user.newpassword!==user.newpasswordagain) setError("New Password Again doesn't match New Password");
        //console.log(error)
    };
    return (
        <div className="updatepassword">
           <form onSubmit={handleSubmit}>
        <div style={{textAlign: "right"}}>
          <label htmlFor="username">
            <big>Current Username</big>
          </label>
          <input name="username" type="text" value={user.username} onChange={handleChange}/>
        </div>
        <div style={{textAlign: "right"}}>
          <label htmlFor="password">
            <big>Current Password</big>
          </label>
          <input name="password" type="password" value={user.password} onChange={handleChange}/>
        </div>
        <div style={{textAlign: "right"}}>
          <label htmlFor="newpassword">
            <big>New Password</big>
          </label>
          <input name="newpassword" type="password" value={user.newpassword} onChange={handleChange}/>
        </div>
        <div style={{textAlign: "right"}}>
          <label htmlFor="newpasswordagain">
            <big>New Password Again</big>
          </label>
          <input name="newpasswordagain" type="password" value={user.newpasswordagain} onChange={handleChange}/>
        </div>
        <div style={{textAlign: "right"}}>
          <button type="submit">Submit</button>
        </div>
        
        <div style={{textAlign: "right"}}>{error} </div>
      </form> 
        </div>
    );
}

export default Updatepassword;