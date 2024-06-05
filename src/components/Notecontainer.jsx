import React, { useRef } from "react";
import Notes from "./Notes";

function Notecontainer({ notes, deleteNote, updateText }) {
  const ref = useRef(null);

  const reverseArray = (arr) => {
    return arr.slice().reverse();
  };

  const reversedNotes = reverseArray(notes);

  return (
    <div ref={ref} className="h-full">
      <h2 className="text-5xl text-zinc-200 mb-5">Notes</h2>
      <div className="flex flex-wrap gap-6 h-[90%] overflow-y-scroll hide-scrollbar">
        {reversedNotes.length > 0 ? (
          reversedNotes.map((item) => (
            <Notes
              key={item.id}
              note={item}
              deleteNote={deleteNote}
              updateText={updateText}
              reference={ref}
            />
          ))
        ) : (
          <h1 className="text-zinc-300 m-80 pt-16 text-2xl">
            No Notes Available
          </h1>
        )}
      </div>
    </div>
  );
}

export default Notecontainer;
