import React, { useState } from "react";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <form action="submit">
        <label htmlFor="query">Search for a recipe:</label>
        <input type="text" id="query" name="query" value={searchQuery} />
      </form>
    </div>
  );
};

export default SearchForm;
