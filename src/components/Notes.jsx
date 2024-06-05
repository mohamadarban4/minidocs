import React from "react";
import croxbtn from "../assets/croxbtn.png";
import { motion } from "framer-motion";

let timer = 500,
  timeout;

function Notes({ note, deleteNote, updateText, reference }) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const months = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${months}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    debounce(() => updateText(newText, note.id));
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
    >
      <div className="relative w-64 h-72 flex flex-col rounded-[45px] bg-zinc-900/90 opacity-85 p-5 overflow-hidden">
        <textarea
          className="mt-4 flex-1 resize-none bg-transparent text-base leading-7 outline-none text-white border-none"
          defaultValue={note.text}
          onChange={handleTextChange}
        />
        <footer
          className="absolute bottom-0 left-0 text-black py-2 px-10 h-9 w-full"
          style={{ backgroundColor: note.color }}
        >
          <div className="flex items-center justify-between text-sm mb-10">
            <p className="mb-5">{formatDate(note.time)}</p>
            <img
              src={croxbtn}
              alt=""
              className="w-6 mb-5 bg-black rounded-full cursor-pointer"
              onClick={() => deleteNote(note.id)}
            />
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

export default Notes;
