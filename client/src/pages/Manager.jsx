import React from 'react'
import Header from '../components/Header'
import Sidebar from "../components/SideBar";
import * as AiIcons from "react-icons/ai";

const Manager = () => {
    const SidebarData = [
        {
            title: " Create a new match",
            path: "/CreateMatch",
            icon: <AiIcons.AiFillHome />,
        },
        {
            title: " Add a new stadium",
            path: "/AddStadium",
            icon: <AiIcons.AiFillHome />,
        }
    ]
    return (
        <div>
            <Sidebar SidebarData={SidebarData}/>
            <Header />
        </div>
    )
}

export default Manager;