import React from 'react'
import Button from './Button'
import "../assets/css/layout.css";


const SearchBarCompRow = ({ userArr, onDelete }) => {
  return (

    <tr>
      <td>{userArr.username}</td>
      <td>{userArr.firstname} {userArr.lastname}</td>
      <td className='mohy'>{userArr.email}</td>
      <td className='mohy'>{userArr.role}</td>
      <td>
        <Button onClick={() => onDelete(userArr.username)} buttText={'Delete'} />
      </td>
    </tr>


  );
};


export default SearchBarCompRow;
