import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav className="p-5 bg-green-500 shadow flex justify-between">
        <Link to={'/'}>
          <h1 className="text-white text-3xl font-bold">React Movies</h1>
        </Link>
        <div className="group inline-flex rounded-xl content-center bg-green-100 p-2 hover:bg-green-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-500 group-hover:text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
