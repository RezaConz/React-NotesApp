import React from "react";
import ArchiveItem from "./ArchiveItem";

function ArchiveList({ notes, onDelete, onAchieve }) {
  if (notes.filter((note) => note.achieved === true).length === 0){
    return (
      <div className='notes-list__empty-message'>
        <img src='public/empty.png' className='empty-image' alt='No notes' />
        <h2 className='notes-list__empty-message'>No notes available</h2>
      </div>
    );
  }

  return (
    <div className='notes-list'>
      {notes
        .filter((note) => note.achieved === true)
        .map((note) => (
          <ArchiveItem
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

export default ArchiveList;
