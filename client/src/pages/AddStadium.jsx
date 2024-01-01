import React, { useState, useEffect } from 'react';
import MyForm from '../components/MyForm'
import Header from '../components/Header'
import Sidebar from "../components/SideBar";
import SidebarData from '../assets/Data/ManagerSideBarData';
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'
import axios from 'axios'

    

const AddStadium = () => {

    const [message, setMessage] = useState(null);

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
    
    const handleAddStadium = async (values , errors) => {    
        if(Object.keys(errors).length === 0){
            try {
                const res = await axios.post('http://localhost:3001/api/stadium/addstadium', values);
                setMessage('Stadium added successfully');
                console.log(res);
              } catch (err) {
                setMessage('Error adding stadium');
                console.log(err);
              }
        }
    }
    
    return (
        <div>
            {/* <Sidebar SidebarData={SidebarData}/> */}
            <Header />
            <MyForm inputArr={inputArr} type="addstadium" title="Add Stadium" buttText="Add Stadium" handleSub={handleAddStadium}/>
            {message && <div style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</div>}
        </div>
    )
}

export default AddStadium 
