import React from "react";
import SignUpForm from "./components/SignUpForm";
import NotesApp from "./components/NotesApp";
import "./styles/App.css"
function App() {
  return (
    <div className="App">
      <h1 className="hello-world">Hello World Page</h1>
      <SignUpForm />
      <NotesApp />
    </div>
  );
}

export default App;
