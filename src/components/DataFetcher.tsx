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
    diet: string;
    intolerances: string;
    includeIngredients: string;
    excludeIngredients: string;
    type: string;
    instructionsRequired: string;
    addRecipeInformation: string;
    sort: string;
    sortDirection: string;
    minCalories: string;
    maxCalories: string;
    offset: string;
    number: string;
    limitLicense: string;
    ranking: string;
  };
}

const DataFetcher: React.FC<RecipeSearchProps> = () => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    params: {
      query: "pasta",
      cuisine: "italian",
      diet: "vegetarian",
      intolerances: "gluten",
      includeIngredients: "tomato,cheese",
      excludeIngredients: "eggs",
      type: "main course",
      instructionsRequired: "true",
      addRecipeInformation: "false",
      sort: "calories",
      sortDirection: "asc",
      minCalories: "50",
      maxCalories: "800",
      offset: "0",
      number: "10",
      limitLicense: "false",
      ranking: "2",
    },
    headers: {
      "X-RapidAPI-Key": "86f6844e77mshc0e89cf629d9db5p1e9b99jsn9d58087ff9af",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: AxiosError) {
      console.error(error);
    });

  return <div>DataFetcher</div>;
};

export default DataFetcher;
