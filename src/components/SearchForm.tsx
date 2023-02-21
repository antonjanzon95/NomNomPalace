import React, { useState } from "react";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form action="submit">
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
