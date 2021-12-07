import React, { useState, useEffect } from "react";
import PersonList from "./PersonList";
import Filter from "./Filter";
import AddNew from "./AddNew";
import Notification from "./Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [initialPersons, setInitialPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
      setInitialPersons(response.data);
    });
  }, []);

  const handleSetPhone = (e) => {
    setNewPhone(e.target.value);
  };
  const handleSetName = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone,
    };
    personService
      .create(personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setSuccessMessage(`${personObject.name} has been added`);
        setNewPhone("");
        setNewName("");
        return persons;
      })
      .catch((error) => {
        const nowError = error.response.data.error;
        setErrorMessage(nowError);
        console.log(errorMessage);
      });
  };

  const handleSetSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const handleFilterPersons = (e) => {
    e.preventDefault();
    setPersons(initialPersons);
    handleFilterPersonsSearch(e);
  };

  const handleFilterPersonsSearch = (e) => {
    e.preventDefault();

    const filteredPersons = initialPersons.filter((person) =>
      person.name.includes(searchString)
    );
    setPersons(filteredPersons);
  };

  const handleRemovePerson = (id) => {
    personService
      .removePerson(id)
      .then(() => setPersons(persons.filter((person) => person.id !== id)));
  };

  return (
    <div className="p-3">
      <h2>Phonebook</h2>
      {errorMessage?.length > 0 ? (
        <p>
          <Notification notifClass="error" message={errorMessage} />
        </p>
      ) : successMessage?.length > 0 ? (
        <p>
          <Notification notifClass="success" message={successMessage} />
        </p>
      ) : (
        <p></p>
      )}

      <form onSubmit={(e) => handleFilterPersons(e)}>
        <p>Filter shown with</p>
        <Filter handleSetSearchString={handleSetSearchString} />
      </form>

      <h2>Add a New </h2>
      <AddNew
        addPerson={addPerson}
        handleSetPhone={handleSetPhone}
        handleSetName={handleSetName}
      />
      <h2>Numbers</h2>
      <div>
        <PersonList persons={persons} handleRemovePerson={handleRemovePerson} />
      </div>
    </div>
  );
};

export default App;
