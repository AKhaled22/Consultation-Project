import React from 'react'
import logo from '../assets/OIP.jpg'
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-container-leftside'>

                    <div>open Side Bar</div>
                    <img src={logo} />



                </div>
                <div className='navbar-container-rightside'>
                    <div>Register</div>
                    <div>Sign in</div>
                </div>

            </div>
        </div>
    )
}

export default NavBar