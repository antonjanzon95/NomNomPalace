import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-screen bg-emerald-700">
      <nav className="mx-auto container flex justify-center items-center">
        <ul className="flex gap-8 p-2 text-gray-100">
          <li className="hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
