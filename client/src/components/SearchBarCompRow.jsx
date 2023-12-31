import React from 'react'
import Button from './Button'


const SearchBarCompRow = ({ userArr, onDelete }) => {
  return (

    <tr>
      <td>{userArr.id}</td>
      <td>{userArr.name}</td>
      <td>{userArr.email}</td>
      <td>{userArr.role}</td>
      <td>
        <Button onClick={() => onDelete(userArr.id)} buttText={'Delete'} />
      </td>
    </tr>


  );
};


export default SearchBarCompRow;
