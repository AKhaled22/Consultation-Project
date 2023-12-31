// Filename - components/Sidebar.js

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// function Example() {


// 	return (
// 		<>
// 			<Button variant="primary" onClick={handleShow}>
// 				Launch
// 			</Button>

// 			<Offcanvas show={show} onHide={handleClose}>
// 				<Offcanvas.Header closeButton>
// 					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
// 				</Offcanvas.Header>
// 				<Offcanvas.Body>
// 					Some text as placeholder. In real life you can have the elements you
// 					have chosen. Like, text, images, lists, etc.
// 				</Offcanvas.Body>
// 			</Offcanvas>
// 		</>
// 	);
// }

// export default Example;



const Sidebar = ({ SidebarData, toggleSideBar, sideBar }) => {
	// const [sidebar, setSidebar] = useState(true);

	// const toggleSidebar = () => setSidebar(!sidebar);
	// setSidebar(showSideBar)

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>

			{/* <div className="sidebar" style={!sideBar ? { "left": "-100%" } : { "left": "0" }}>
				<div className="sidebar-wrap">

					<div className="sidebar-up">
						<FontAwesomeIcon onClick={() => {toggleSideBar()}}  className="btnclose" icon={faXmark} />

					</div>
					<div className="sidebar-entries">
						<div className="sidebar-entry">hi</div>
						<div className="sidebar-entry">hi</div>
						<div className="sidebar-entry">hi</div>

					</div>

					{/* <div>hi</div> */}




			{/* </div > */}
			{/* // </div > * /} */}

			{/* <FontAwesomeIcon onClick={() => {toggleSideBar()}}  className="btnclose" icon={faXmark} /> */}


			< Offcanvas show={sideBar} onHide={toggleSideBar} >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas >

		</>
	);
};

export default Sidebar;
