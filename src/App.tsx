import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <>
      <Header />
      <DataFetcher query={"cheese"} />
      <Hero />
    </>
  );
}

export default App;
