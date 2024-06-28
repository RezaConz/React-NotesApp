import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteInput from "./NoteInput";
import ArchiveList from "./ArchiveList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onAchieveHandler = this.onAchieveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAchieveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          achieved: !note.achieved,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            achieved: false,
            createdAt: showFormattedDate(new Date()),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

     return (
       <div className='note-app'>
         <div className='note-app__header'>
           <h1>Notes App</h1>
           <input
             type='text'
             placeholder='Search by title...'
             value={this.state.searchTerm}
             onChange={this.onSearchHandler}
             className='note-search'
           />
         </div>
         <div className='note-app__body'>
           <h2>Tambah Catatan</h2>
           <div className='note-input-container'>
             <img
               src={process.env.PUBLIC_URL + "/images/img.png"}
               alt='Image'
               className='note-input-image'
             />
             <NoteInput addNote={this.onAddNoteHandler} />
           </div>
           <h2>Daftar Catatan</h2>
           <NoteList
             notes={filteredNotes.filter((note) => !note.achieved)}
             onDelete={this.onDeleteHandler}
             onAchieve={this.onAchieveHandler}
           />
           <h2>Arsip Catatan</h2>
           <ArchiveList
             notes={filteredNotes.filter((note) => note.achieved)}
             onDelete={this.onDeleteHandler}
             onAchieve={this.onAchieveHandler}
           />
         </div>
       </div>
     );
  }
}

export default NoteApp;
