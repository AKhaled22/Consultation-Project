import { useState } from 'react';
import React, { useEffect } from "react";
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MyPagination from '../components/MyPagination';  
import AdminList from '../components/AdminList';



const Admin = () => {

   const inputArr = [
  {
    name: "Ahmed",
    id: "ahmedtoeima",
    email: "username@gmail.com",
    role:"Manger"


  },
  {
    name: "Abdullah",
    id: "abdullahouda",
    email: "username2@gmail.com",
    role:"Manger"
  },
  {
    name: "Rawan",
    id: "rawanadel",
    email: "username3@gmail.com",
    role:"Manger"
  },
  {
    name: "Mohy",
    id: "mostafamohy",
    email: "username99@gmail.com",
    role:"Fan"
  },
  {
    name: "Fouda",
    id: "mostafafouda",
    email: "username121@gmail.com",
    role:"Manger"


  },
  {
    name: "Kabab",
    id: "Ali Kabab",
    email: "username2@gmail.com",
    role:"Manger"
  },
  {
    name: "Omar Yahya",
    id: "omaryaya",
    email: "username3@gmail.com",
    role:"Manger"
  },
  {
    name: "Samehizar",
    id: "Sameh Nizar",
    email: "username99@gmail.com",
    role:"Fan"
  }
  
]

  const [searchResults, setSearchResults] = useState([]);

  //Fetch unapproved users
  useEffect(() => {
    fetchUnapprovedUsers();
  }, []);

  const fetchUnapprovedUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/admin/getUnapprovedUsers');
      console.log(res.data.unapprovedUsers);
      setSearchResults(res.data.unapprovedUsers);
    } catch (err) {
      console.error(err);
    }
  };

  //Handle insert
  const handleInsert = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/admin/insertUsers",
        values
      );
  
      if (res.status === 200) {
        console.log("User inserted successfully!");
        //fetchUnapprovedUsers();
      }
    } catch (err) {
      console.error(err);
    }
  };


  // Handle Delete 
  const handleDelete = async (username) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/api/admin/delete/${username}`
      );
  
      if (res.status === 200) {
        console.log("User deleted successfully!");
      //  fetchUnapprovedUsers();
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="container">
      <div>
        <div className="delete-admin-page-text-div">
          <h1 className="main-text-class-text">Accept Users</h1>
        </div>
      </div>
      <div className='container'>
            <AdminList usersArray={searchResults} onDelete={handleDelete} onInsert={handleInsert} />
      </div>
    </div>
  );
};

export default Admin;


