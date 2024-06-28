import React from "react";


function ActiveButton({ id, onArchive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      Pindahkan
    </button>
  );
}

export default ActiveButton;
