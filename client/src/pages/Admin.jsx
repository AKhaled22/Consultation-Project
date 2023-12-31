import React from 'react';
import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(inputArr);

  const handleDelete = (nameToDelete) => {
    setSearchResults((prevResults) =>
      prevResults.filter((user) => user.name !== nameToDelete)
    );
  };

  const handleInsert = (nameToDelete) => {
    setSearchResults((prevResults) =>
      prevResults.filter((user) => user.name !== nameToDelete)
    );
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
