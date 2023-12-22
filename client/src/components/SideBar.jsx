// Filename - components/Sidebar.js

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from'@fortawesome/free-solid-svg-icons'





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
