import React, { useState } from 'react';
import Button from './Button';
import SearchBarCompList from './SearchBarCompList';

const SearchBar = ({ UsersArr }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(UsersArr);

  const handleSearch = () => {
    const results = UsersArr.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleDelete = (nameToDelete) => {
    setSearchResults(prevResults =>
      prevResults.filter(user => user.name !== nameToDelete)
    );
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value === '') {
      setSearchResults(UsersArr); 
    } else {
      handleSearch();
    }
  };

  return (
    <div>
      <div className='searchbar'>
        <div className='searchbar-nafso'>
          <input
            type="text"
            placeholder="Search by Name.."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <Button buttText="Search" onClick={handleInputChange} />
      </div>

      <div>
        <table className='container delete-admin-page-search-div-searchbar-table '>
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <SearchBarCompList searchResults={searchResults} onDelete={handleDelete} /> 
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
