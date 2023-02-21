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
        className="w-80 p-6 shadow-lg bg-slate-50 flex flex-col justify-center items-center gap-6"
      >
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="query" className="text-lg">
            Search for a recipe:
          </label>
          <input
            className="border-solid border-slate-900 border-[1px] p-1"
            type="text"
            id="query"
            name="query"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-36 h-12 text-2xl font-extrabold border-2 border-slate-900 rounded px-2 bg-gradient-to-r from-emerald-200 to-emerald-500 hover:from-emerald-500 hover:to-emerald-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
