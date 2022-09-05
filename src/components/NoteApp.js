import React from 'react';
// import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import { getInitialData } from '../utils/data';
import AddNote from './AddNote';
import Search from './Search';
 
class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getInitialData(),
      }
    
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }

    onAddNoteHandler({ title, text, createdAt}) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                text,
                createdAt,
              }
            ]
          }
        });
      }
    
    render() {
      
        return (
        <div className="container">
            <h1>Add Note</h1>
            <AddNote addNote={this.onAddNoteHandler} />
            
            <h1>Search</h1>
				    <Search/>
            <h1>Notes List</h1>
            <NotesList notes={this.state.notes} handleDeleteNote={this.onDeleteHandler}
            />
        </div>
        );
    }
}
 
export default NoteApp;