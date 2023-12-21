// Filename - components/Sidebar.js

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from'@fortawesome/free-solid-svg-icons'

import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import NavBar from '../components/NavBar';

// const Nav = styled.div`
// 	background: #012f98;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// `;

// const NavIcon = styled(Link)`
// 	margin-left: 2rem;
// 	font-size: 2rem;
// 	height: 80px;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// `;

// const SidebarNav = styled.nav`
// 	background: #15171c;
// 	width: 250px;
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	position: fixed;
// 	top: 0;
// 	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
// 	transition: 350ms;
// 	z-index: 10;
// `;

// const SidebarWrap = styled.div`
// 	width: 100%;
// `;

const Sidebar = ({ SidebarData , toggleSideBar , sideBar}) => {
	// const [sidebar, setSidebar] = useState(true);

	// const toggleSidebar = () => setSidebar(!sidebar);
	// setSidebar(showSideBar)
	return (
		<>

			<div className="sidebar" style={!sideBar ? { "left": "-100%" } : { "left": "0" }}>
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




				</div>
			</div>
			{/* <IconContext.Provider >
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
						/>
					</NavIcon>
					{<NavBar/>}
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
							/>
						</NavIcon>
						{SidebarData && SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider> */}
		</>
	);
};

export default Sidebar;
