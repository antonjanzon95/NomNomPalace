import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type Recipe = {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
};

type ResponseData = {
  results: Recipe[];
};

interface RecipeSearchProps {
  parameters: {
    query: string;
    cuisine: string;
  };
}

const DataFetcher: React.FC<RecipeSearchProps> = ({ parameters }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<ResponseData> = await axios.get(
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
          {
            params: {
              apiKey: "86f6844e77mshc0e89cf629d9db5p1e9b99jsn9d58087ff9af",
              ...parameters,
            },
          }
        );

        setRecipes(response.data.results);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchData();
  }, [parameters]);

  return <div>DataFetcher</div>;
};

export default DataFetcher;
