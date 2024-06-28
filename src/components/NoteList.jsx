import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onAchieve }) {
  if (notes.length === 0) {
    return (
      <div className='notes-list__empty-message'>
        <img
          src='React-NotesApp/images/empty.png'
          className='empty-image'
          alt='No notes'
        />
        <h2 className='notes-list__empty-message'>No notes available</h2>
      </div>
    );
  }

  return (
    <div className='notes-list'>
      {notes
        .filter((note) => !note.achieved)
        .map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onAchieve}
            {...note}
          />
        ))}
    </div>
  );
}

export default NoteList;
