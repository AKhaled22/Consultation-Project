import React , {useEffect}from 'react'
import MyForm from '../components/MyForm'
import Header from '../components/Header'
import Sidebar from "../components/SideBar";
import SidebarData from '../assets/Data/ManagerSideBarData';

import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'




    

const AddStadium = () => {

    const dispatch = useDispatch()

    useEffect(() => {
    
    
        dispatch(setActivePage("addstadium")) 
      
    }, [])

    
    const inputArr = [
        {
            type: "text",
            label: "Name",
            placeholder: "Ex: Borg el-Arab Stadium",
            name: "StadName"
        },
        {
            type: "dropdown",
            label: "City",
            placeholder: "Ex: Cairo",
            name: "StadCity",
            optionsArr: [
                "Cairo",
                "Alexandria",
                "Gizeh",
                "Shubra El-Kheima",
                "Port Said",
                "Suez",
                "Luxor",
                "al-Mansura",
                "El-Mahalla El-Kubra",
                "Tanta",
                "Asyut",
                "Ismailia",
                "Fayyum",
                "Zagazig",
                "Aswan",
                "Damietta",
                "Damanhur",
                "al-Minya",
                "Beni Suef",
                "Qena",
                "Sohag",
                "Hurghada",
                "6th of October City",
                "Shibin El Kom",
                "Banha",
                "Kafr el-Sheikh",
                "Arish",
                "Mallawi",
                "10th of Ramadan City",
                "Bilbais",
                "Marsa Matruh",
                "Idfu",
                "Mit Ghamr",
                "Al-Hamidiyya",
                "Desouk",
                "Qalyub",
                "Abu Kabir",
                "Kafr el-Dawwar",
                "Girga",
                "Akhmim",
                "Matareya"
                ]
        },
        {
            type: "number",
            label: "Number of rows",
            placeholder: "Ex: 5",
            name: "StadRows"
        },
        {
            type: "number",
            label: "Number of seats per row",
            placeholder: "Ex: 20",
            name: "StadSeats"
        },

    ]
    
    return (
        <div>
            <Sidebar SidebarData={SidebarData}/>
            <Header />
            <MyForm inputArr={inputArr} type="addstadium" title="Add Stadium" buttText="Add Stadium" />
        </div>
    )
}

export default AddStadium 
