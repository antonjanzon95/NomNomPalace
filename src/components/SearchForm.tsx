import React, { useState } from "react";

interface SearchFormProps {
  onSubmit: (searchQuery: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="h-36 bg-amber-200 border-solid border-2 border-emerald-700 flex flex-col justify-center items-center gap-3"
      >
        <label htmlFor="query">Search for a recipe:</label>
        <input
          className="border-2 rounded border-black"
          type="text"
          id="query"
          name="query"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-solid border-black border-2 px-2 bg-gradient-to-r from-emerald-200 to-emerald-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
