import React from "react";

function Form({ firstName, onFirstNameChange, lastName, onLastNameChange }) {
  return (
    <form>
      <input type="text" onChange={onFirstNameChange} value={firstName} />
      <input type="text" onChange={onLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
