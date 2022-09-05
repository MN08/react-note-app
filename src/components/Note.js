import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
 
function Note({ id,title, text, createdAt, handleDeleteNote }) {
    return (
		<div className='note'>
			 <div className="note-header">
                <h3>{title}</h3>
                <small>{createdAt}</small>
            </div>
            <p>{text}</p>
			<div className='note-footer'>
            <ArchiveButton />
            <DeleteButton id={id} handleDeleteNote={handleDeleteNote} />
			</div>
		</div>
	);
}
 
export default Note;