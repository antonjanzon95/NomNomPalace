import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import SearchForm from "./SearchForm";

const Hero = () => {
  const [query, setQuery] = useState("");

  return (
    <main className="h-screen w-screen bg-amber-50">
      <div className="container flex flex-col items-center pt-10 gap-6">
        <h1 className="text-2xl">Nom Nom Palace</h1>
        <SearchForm />
      </div>
      <DataFetcher query={"cheese"} />
    </main>
  );
};

export default Hero;
