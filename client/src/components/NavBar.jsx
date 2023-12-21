import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from './SideBar';
import * as FaIcons from "react-icons/fa";
import avatar from '../assets/avatar.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'






const NavBar = () => {
    const activePage = useSelector((state) => state.page.value)
    const userType = useSelector((state) => state.user.value)
    console.log(activePage, userType);
    const dispatch = useDispatch()

    const [sideBar, setSideBar] = useState(false)
    const [collapse, setCollapse] = useState(false)

    const toggleSidebar = () => setSideBar(!sideBar);
    const toggleNavbar = () => setCollapse(!collapse);




    return (
        <>



            {/* <nav className="navbar navbar-expand-lg">



                <Sidebar toggleSideBar={toggleSidebar} sideBar={sideBar} />

                <div className="navleftside">

                    <FaIcons.FaBars className={`crsp  ${userType == "guest" && "d-none"}`} onClick={() => { setSideBar(!sideBar) }} />
                    <div>E7GEZLY</div>

                </div>
                <ul className={`navrightside collapse${collapse ? ".show flex-direction-col":""} navbar-collapse ${userType != "guest" && "d-none"}`}>
                    <li className={`navrightsideitem nav-item ${activePage == "home" && "activepagenavbar"}`}><Link onClick={() => { dispatch(setActivePage("home")) }} to="/home">Home</Link></li>
                    <li className={`navrightsideitem nav-item ${activePage == "login" && "activepagenavbar"}`}><Link onClick={() => { dispatch(setActivePage("login")) }} to="/login">Login</Link></li>
                    <li className={`navrightsideitem nav-item ${activePage == "signup" && "activepagenavbar"}`}><Link onClick={() => { dispatch(setActivePage("signup")) }} to="/register">Sign Up</Link></li>
                    <li className={`navrightsideitem nav-item ${activePage == "aboutus" && "activepagenavbar"}`}><Link onClick={() => { dispatch(setActivePage("aboutus")) }} to="/aboutus">About Us</Link></li>
                </ul>
                <ul className={`navrightside ${userType == "guest" && "d-none"}`}>
                    <li>Hello Ahmed</li>
                    <img src={avatar} className={`avatar-image `} />
                </ul>
                {/* <ul className={`navrightside`}>
                   
                    <FaIcons.FaBars className={`crsp navbar-toggler-icon `} onClick={() => { toggleNavbar() }} />
                </ul> */}




            {/* </nav> */}


            <Navbar expand="lg" className=" navbar">
                <Sidebar toggleSideBar={toggleSidebar} sideBar={sideBar} />
                <Container>
                    <Navbar.Brand >
                        <div className="navleftside">

                            <FaIcons.FaBars className={`crsp  ${userType == "guest" && "d-none"}`} onClick={() => { setSideBar(!sideBar) }} />
                            <div>E7GEZLY</div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className={`navrightside`}>
                        <Nav className={`${userType == "guest" && "d-none"} avatar`}>
                            {/* <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link> */}
                            <li>Hello Ahmed</li>
                            <img src={avatar} className={`avatar-image `} />


                        </Nav>

                        <Nav className={`${userType != "guest" && "d-none"}`}>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                    {/* <Navbar.Collapse id="basic-navbar-nav" className={`navrightside ${userType != "guest" && "d-none"}`}>
                        
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
