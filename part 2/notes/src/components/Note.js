import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="mt-1 mb-1">
      {note.content}
      <button
        id="my-button-style"
        className="mb-1 ms-3  p-1 btn btn-outline-primary "
        onClick={() => toggleImportance(note.id)}
      >
        {label}
      </button>
    </li>
  );
};
export default Note;
