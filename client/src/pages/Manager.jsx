import React from 'react'
import Header from '../components/Header'
import Sidebar from "../components/SideBar";
import SidebarData from '../assets/Data/ManagerSideBarData';

const Manager = () => {
    return (
        <div>
            <Sidebar SidebarData={SidebarData}/>
            <Header />
        </div>
    )
}

export default Manager;