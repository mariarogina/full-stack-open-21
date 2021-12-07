import React from "react";
import Person from "./Person";
import { v4 as uuidv4 } from "uuid";

const PersonList = ({ persons, handleRemovePerson }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return (
            <Person
              person={person}
              handleRemovePerson={handleRemovePerson}
              key={uuidv4()}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PersonList;
