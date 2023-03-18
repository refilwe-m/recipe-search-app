const BASE_URL = "https://api.edamam.com/api/recipes/v2";
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export const getRecipe = async (ingredient: string) => {
  const url = `${BASE_URL}?type=public&q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "'text/x-typescript",
    },
  };
  const results = await fetch(url, options);
  return results;
};
