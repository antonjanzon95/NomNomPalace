import React, { useState } from "react";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search for a recipe:</label>
        <input
          type="text"
          id="query"
          name="query"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;
