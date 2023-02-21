import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import SearchForm from "./SearchForm";

const Hero = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <main className="w-screen bg-slate-200">
      <div className="mx-auto container flex flex-col items-center pt-10 gap-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900">
          Nom Nom Palace
        </h1>
        <SearchForm onSubmit={handleSearch} />
      </div>
      {query && <DataFetcher query={query} key={query} />}
    </main>
  );
};

export default Hero;
