"use client";
import React, { useState } from "react";

type props = {
  setSearchText: any;
};

const Navbar = ({ setSearchText }: props) => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    setSearchText(text);
  };

  return (
    <nav className="flex p-6 mt-7 w-full justify-center">
      <input
        type="text"
        className="p-4 rounded outline-none focus:ring-green-500 "
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
