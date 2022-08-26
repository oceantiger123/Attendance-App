import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const redirect = ()=>{
        window.location.href = '/'
      }; 
    const handleChange=()=>{
        window.localStorage.removeItem("token");
        redirect();
    }
    return (
            <nav>
                <div className="nav" style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: "30px"}}>
                    <Link to="/">Home</Link>
                    <Link to="/members">Members</Link>
                    <Link to="/updatepassword">Update Password</Link>
                    <Link to="/logout" onClick={handleChange}>Log out</Link>
                </div>
            </nav>
    
    )
}

export default Navbar