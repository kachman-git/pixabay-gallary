"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type props = {
  setSearchText: Dispatch<SetStateAction<string>>;
};

const Navbar = ({ setSearchText }: props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchText(query);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      setQuery("");
    }
  };

  return (
    <nav className="flex p-6 space-x-4 my-7 w-full justify-center border-b-2 border shadow-sm">
      <input
        type="text"
        placeholder="Enter Text"
        className="p-4 rounded outline-none ring-green-500 focus:ring-green-500 "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
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
