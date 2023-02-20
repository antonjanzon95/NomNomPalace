import React from "react";
import DataFetcher from "./DataFetcher";

const Hero = () => {
  return (
    <main className="h-screen w-screen bg-amber-50">
      <div className="container flex flex-col items-center pt-10 gap-6">
        <h1 className="text-2xl">Nom Nom Palace</h1>
        <div className="w-80 h-36 bg-amber-200 border-solid border-2 border-emerald-700 flex flex-col justify-center items-center gap-3">
          <div>
            <p className="text-center">Search for a recipe:</p>
            <input type="text" className="border-2 rounded border-black" />
          </div>
          <div>
            <button className="border-solid border-black border-2 px-2 bg-gradient-to-r from-emerald-200 to-emerald-500">
              Search
            </button>
          </div>
        </div>
      </div>
      <DataFetcher query={"cheese"} />
    </main>
  );
};

export default Hero;
