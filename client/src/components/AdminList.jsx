import React from 'react'
import Button from './Button'
import AdminRow from './AdminRow';

const AdminList = ({ usersArray, onDelete, onInsert }) => {
    return (
      <table className='container delete-admin-page-search-div-searchbar-table '>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th className='mohy'>Email</th>
            <th className='mohy'>Role</th>
            <th>Insert</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map((user, index) => (
            <AdminRow key={index} userArr={user} onInsert={onInsert} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    );
  };


export default AdminList;
