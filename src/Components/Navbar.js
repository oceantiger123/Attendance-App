import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
            <nav>
                <div className="nav" style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                    <Link to="/">Home</Link>
                    <Link to="/members">Members</Link>
                    <Link to="/dates">Dates</Link>
                </div>
            </nav>
    
    )
}

export default Navbar