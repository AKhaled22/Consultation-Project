import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from './SideBar';
import * as FaIcons from "react-icons/fa";
import avatar from '../assets/avatar.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'






const NavBar = () => {
    const activePage = useSelector((state) => state.page.value)
    const userType = useSelector((state) => state.user.value)
    // console.log(activePage, userType);
    const dispatch = useDispatch()

    const [sideBar, setSideBar] = useState(false)
    const [collapse, setCollapse] = useState(false)

    const toggleSidebar = () => setSideBar(!sideBar);
    const toggleNavbar = () => setCollapse(!collapse);

    // const param = useParams();

        

    // useEffect(() => {

    // console.log(param);        
    
      
    // }, [])
    




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
                    <Nav >
                        <div className="navleftside">

                            <FaIcons.FaBars className={`crsp  ${userType == "guest" && "d-none"}`} onClick={() => { setSideBar(!sideBar) }} />
                            <Nav.Link href="/home">E7GEZLY</Nav.Link>

                        </div>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${userType != "guest" && "d-none"}`} />
                        {/* <FaIcons.FaBars className={`crsp  ${userType == "guest" && "d-none"}`} onClick={() => { setSideBar(!sideBar) }} /> */}

                    {/* </NavBar.Toggle> */}
                    <Navbar.Collapse id="basic-navbar-nav" className={`${userType != "guest" && "d-none"} navrightside`}>


                        <Nav className={`${userType != "guest" && "d-none"} d-flex gap-3`}>
                            <Link to="/home" className={` navrightsideitem ${activePage == "home" && "activepagenavbar"}`} onClick={() => { dispatch(setActivePage("home")) }}>Home</Link>
                            <Link to="/login" className={` navrightsideitem ${activePage == "login" && "activepagenavbar"}`} onClick={() => { dispatch(setActivePage("login")) }}>Login</Link>
                            <Link to="/register" className={`navrightsideitem ${activePage == "register" && "activepagenavbar"}`} onClick={() => { dispatch(setActivePage("signup")) }}>Signup</Link>


                        </Nav>
                    </Navbar.Collapse>
                    <nav className={`${userType == "guest" && "d-none"} avatar`}>

                        <span>Hello Ahmed</span>
                        <img src={avatar} className={`avatar-image `} />


                    </nav>

                    {/* <Navbar.Collapse id="basic-navbar-nav" className={`navrightside ${userType != "guest" && "d-none"}`}>
                        
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
