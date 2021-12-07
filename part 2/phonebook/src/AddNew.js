import React from "react";

const AddNew = (props) => {
  return (
    <>
      <form onSubmit={(e) => props.addPerson(e)}>
        <div>
          name:
          <input
            className="mb-2 mt-3 ms-2"
            type="text"
            onChange={(e) => props.handleSetName(e)}
            required
          />
        </div>
        <div>
          number:
          <input
            className="mb-2 mt-3 ms-2"
            type="text"
            onChange={(e) => props.handleSetPhone(e)}
            required
          />
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNew;
