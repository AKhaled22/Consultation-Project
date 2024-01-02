import React from 'react'
import Button from './Button'


const AdminRow = ({ userArr, onInsert, onDelete }) => {
  return (

    <tr>
      <td>{userArr.username}</td>
      <td>{userArr.firstname} {userArr.lastname}</td>
      <td>{userArr.email}</td>
      <td>{userArr.role}</td>
      <td>
        <Button onClick={() => onInsert(userArr.username)} buttText={'Insert'} />
      </td>
      <td>
        <Button onClick={() => onDelete(userArr.username)} buttText={'Delete'} />
      </td>
    </tr>


  );
};


export default AdminRow;
