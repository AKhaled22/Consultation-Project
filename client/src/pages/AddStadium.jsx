import React, { useState, useEffect } from "react";
import MyForm from "../components/MyForm";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import SidebarData from "../assets/Data/ManagerSideBarData";
import { useSelector, useDispatch } from "react-redux";
import { setPopup } from "../features/ErrorPopupSlice";
import { setActivePage } from "../features/pageSlice";
import axios from "axios";
import AlertDismissible from "../components/Error";

const AddStadium = () => {
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage("addstadium"));
  }, []);

  const inputArr = [
    {
      type: "text",
      label: "Name",
      placeholder: "Ex: Borg el-Arab Stadium",
      name: "StadName",
    },
    {
      type: "number",
      label: "Number of rows",
      placeholder: "Ex: 5",
      name: "StadRows",
    },
    {
      type: "number",
      label: "Number of seats per row",
      placeholder: "Ex: 20",
      name: "StadSeats",
    },
  ];

  const handleAddStadium = async (values, errors) => {
    // console.log("ADD STAD");
    // console.log(values);
    // console.log(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/stadium/addstadium",
          values
        );
        // setMessage("Stadium added successfully");
        // dispatch(setPopup({data:"Stadium added successfully",type:"success",show:true}));
        // dispatch(setPopup({data:"Stadium added successfully",type:"success",show:false}));
        dispatch(setPopup({data:"Stadium added successfully",type:"success",show:true}));

// introduce a delay of, for example, 2000 milliseconds (2 seconds)
setTimeout(() => {
  dispatch(setPopup({data:"Stadium added successfully",type:"success",show:false}));
}, 2000);

        console.log(res);
      } catch (err) {
        //setMessage(err.response.data.error);
        // dispatch(setPopup({data:err.response.data.error,type:"danger",show:true}));
        // dispatch(setPopup({data:err.response.data.error,type:"danger",show:false}));
        dispatch(setPopup({data:err.response.data.error,type:"danger",show:true}));

// introduce a delay of, for example, 2000 milliseconds (2 seconds)
setTimeout(() => {
  dispatch(setPopup({data:err.response.data.error,type:"danger",show:false}));
}, 2000);

        console.log(err);
      }
    } else {
      //setMessage("Error adding Stadium");
      dispatch(setPopup({data:"Error adding Stadium",type:"danger",show:true}));

// introduce a delay of, for example, 2000 milliseconds (2 seconds)
      setTimeout(() => {
        dispatch(setPopup({data:"Error adding Stadium",type:"danger",show:false}));
      }, 2000);

    }
  };

  return (
    <div>
      {/* <Sidebar SidebarData={SidebarData}/> */}
      <Header />
      <MyForm
        inputArr={inputArr}
        type="addstadium"
        title="Add Stadium"
        buttText="Add Stadium"
        handleSub={handleAddStadium}
      />
      
    </div>
  );
};

export default AddStadium;
