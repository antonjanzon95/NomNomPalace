import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=e1fcb73082d845f8a97b44215050d307"
    )
      .then((response) => response.json())
      .then((res) => console.log(res));
  }, []);

  return <div>Hello</div>;
};

export default DataFetcher;
