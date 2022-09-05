import React from 'react';
import Note from './Note';

function NotesList({ notes, handleDeleteNote }) {
	return (
		<div className='notes-list'>
			{
				notes.map((note) => (
				<Note
					id={note.id}
					title={note.title}
					text={note.text}
					date={note.createdAt}
					handleDeleteNote={handleDeleteNote}
				/>
			))
			}
		</div>
	);
   }

export default NotesList;