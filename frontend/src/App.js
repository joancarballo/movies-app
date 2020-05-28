import React from "react";
import "./App.css";
import InputMoviesForm from "./components/inputMoviesForm";

export const App = () => {
  return (
    <div className="App">
      <div>
        <p>Your Movies List</p>
      </div>
      <InputMoviesForm />
    </div>
  );
};

export default App;
