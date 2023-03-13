import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault(); // prevent default behaviour of form
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
