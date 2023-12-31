import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MyPagination from '../components/MyPagination';  


const AdminDelete = () => {

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

  return (
    <div className='container'>

      <div> 
        <div className='delete-admin-page-text-div'>
          <h1 className='main-text-class-text'>Delete Users</h1>
        </div>

        <div className='container'>
          <SearchBar UsersArr={inputArr} className='delete-admin-page-search-div-searchbar'/>
        </div>

      </div>
       <div className='container'>
        {/* <MyPagination total={totalPages} current={currentPage} onChangePage={handlePageChange} />*/ }
      </div> 


      
    </div>
  );
};

export default AdminDelete;
