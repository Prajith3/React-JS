// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
/*
function getButtonText() {
  return "Click on Me!";
}
*/

const App = () => {
  const buttonClick="Click Me";
  return (
    <div>
      <label className="label" htmlFor="name">
        {" "}
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonClick}
      </button>
    </div>
  );
};

// Take the React component an dshow it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
