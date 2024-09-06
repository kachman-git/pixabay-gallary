"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type props = {
  setSearchText: Dispatch<SetStateAction<string>>;
  setErr: Dispatch<SetStateAction<string | null>>;
};

const Navbar = ({ setSearchText, setErr }: props) => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    if (Number.length === 0) {
      return setErr("Put Text To Search");
    }
    setSearchText(text);
    setText("");
  };

  return (
    <nav className="flex p-6 space-x-4 my-7 w-full justify-center border-b-2 border shadow-sm">
      <input
        type="text"
        placeholder="Enter Text"
        className="p-4 rounded outline-none ring-green-500 focus:ring-green-500 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="p-4 rounded bg-green-500 text-white "
        onClick={handleSearch}
      >
        Search
      </button>
    </nav>
  );
};

export default Navbar;
