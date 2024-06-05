import React from "react";

function Display({ value }) {
  return (
    <div className="bg-zinc-300 w-full p-1 border-2 border-zinc-400 shadow-sm rounded-md">
      <input
        type="text"
        placeholder="enter data.."
        className="bg-zinc-700 px-2 py-3 rounded-md w-full shadow-sm text-white hover:bg-zinc-800 shadow- shadow-stone-600"
        value={value}
        
      ></input>
    </div>
  );
}

export default Display;
