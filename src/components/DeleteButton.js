import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
 
function DeleteButton({ id, handleDeleteNote }) {
  return <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)}/>
}
 
export default DeleteButton;