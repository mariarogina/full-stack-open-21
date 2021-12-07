import React from "react";

const Person = ({ person, handleRemovePerson }) => {
  const confirmAndRemove = (name) => {
    const confirmRemoval = window.confirm(`Want to delete ${name}?`);
    if (confirmRemoval) {
      handleRemovePerson(person.id);
    }
  };

  return (
    <>
      <li className="mb4 mt4">
        {person.name} {person.number}
        <button
          className="btn btn-danger btn-sm del_btn ml-2 ms-2 mb-2"
          onClick={() => {
            confirmAndRemove(person.name);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Person;
