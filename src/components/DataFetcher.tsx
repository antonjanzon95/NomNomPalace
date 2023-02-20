import React, { useState, useEffect } from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface RecipeProps {
  query: string;
}

const DataFetcher: React.FC<RecipeProps> = ({ query }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=e1fcb73082d845f8a97b44215050d307`
    )
      .then((response) => response.json())
      .then((res) => setRecipes(res.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex items-center flex-col p-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="h-30 w-80 flex gap-10 mb-10 justify-between items-center outline p-4"
        >
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="h-20 w-20" />
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
