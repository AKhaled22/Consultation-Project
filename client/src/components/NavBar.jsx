import React from 'react'
import logo from '../assets/OIP.jpg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
      
        
        <nav className="navbar navbar-expand-lg">
            <div className='navleftside'>E7GEZLY</div>
            <ul className='navrightside'>
                <li>
                    <Link to="/Login" style={{color:"white"}}>Home</Link>
                </li>
                <li>
                    <Link to="/Login" style={{color:"white"}}>Login</Link>
                </li>
                <li>
                    <Link to="/Register" style={{color:"white"}}>Sign Up</Link>
                </li>
                <li>
                    <Link to="/Login" style={{color:"white"}}>About Us</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar