import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ActiveButton from "./ActiveButton";

function ArchiveItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className='note-item'>
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ActiveButton id={id} onArchive={onArchive} />
    </div>
  );
}

export default ArchiveItem;
