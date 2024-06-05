import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Notecontainer from "./Notecontainer";

function Foreground() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 p-10 overflow-hidden">
      <Sidebar addNote={addNote} />
      <Notecontainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default Foreground;
