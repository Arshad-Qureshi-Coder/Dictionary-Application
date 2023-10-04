import React from "react";
import {Link} from 'react-router-dom';


const Navbar =()=>{
    return (
        <nav className="navbar">
            <div className="disctionary-div">
                <h1>Disctionary App</h1>
            </div>
            <div className="list">
                <Link to="/" className="link">Home</Link>
                <Link to="/history" className="link">History</Link>
            </div>
        </nav>
    )
}

export default Navbar;