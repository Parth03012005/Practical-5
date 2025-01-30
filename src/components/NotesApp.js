import React, { useState } from "react";
import "../styles/NotesApp.css";function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      const newNote = {
        text: noteText,
        timestamp: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
      setNoteText("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Notes Application</h2>
      <textarea
        placeholder="Write your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.text}</p>
            <p>
              <small>{note.timestamp}</small>
            </p>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
