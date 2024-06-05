import React, { useState } from "react";
import add from "../assets/add.png";

function Sidebar({ addNote }) {
  const colors = ["#aaff00", "#ffd319", "#00FFFF", "#FF0000"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-[15%]">
      <img
        src={add}
        alt=""
        className="w-12 p-1 bg-black rounded-full cursor-pointer"
        onClick={() => setListOpen(!listOpen)}
      />
      <ul
        className={`transition-all duration-500 flex flex-col gap-5 items-center ${
          listOpen ? "h-auto" : "h-0"
        }`}
      >
        {colors.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item }}
            className="rounded-full h-4 w-4 list-none cursor-pointer"
            onClick={() => addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
