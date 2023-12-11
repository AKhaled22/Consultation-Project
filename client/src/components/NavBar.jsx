import React from 'react';
import {Link} from 'react-router-dom'


const NavBar = () => {




    return (
        <>
           
            <nav className="navbar navbar-expand-lg">
                <div className="navleftside">E7GEZLY</div>
                <ul className="navrightside">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
