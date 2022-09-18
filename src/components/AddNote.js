import React from 'react';
 
class AddNote extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     title: '',
     text: '',
   }
 
   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onTextChangeEventHandler = this.onTextChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 onTitleChangeEventHandler(event) {
   this.setState(() => {
     return {
       title: event.target.value,
     }
   });
 }
 
 onTextChangeEventHandler(event) {
   this.setState(() => {
     return {
       text: event.target.value,
     }
   });
 }
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addNote(this.state);
 }
 
 render() {
  const characterLimit = 300;
   return (
    <form className='note new' onSubmit={this.onSubmitEventHandler}>
    <input type="text" placeholder="Title..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
    <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={this.state.text}
        onChange={this.onTextChangeEventHandler}></textarea>
        <div className='note-footer'>
            <small>
                {characterLimit - this.state.text.length} Remaining
            </small>
            <button className='save' type="submit">Save</button>
        </div>
    </form>
   )
 }
}
 
export default AddNote;