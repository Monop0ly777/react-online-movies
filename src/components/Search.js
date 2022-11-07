import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ search: query });
  };

  return (
    <div className="search p-6">
      <form autoComplete="off" method="GET" onSubmit={handleSubmit}>
        <input
          name="search"
          className="w-full bg-green-500 
                mt-2 py-2 px-5 
                focus:outline-none
                text-white 
                placeholder:text-white 
                rounded-lg"
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
