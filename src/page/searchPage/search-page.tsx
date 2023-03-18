import React, { useRef, useState } from "react";
import { getRecipe } from "../../services/recipe-api";
import "./search-page.scss";

export const SearchPage = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");
  const [recipeImage, setRecipeImage] = useState<string>("");

  const list = (items: string[]) => {
    return items.map((item, i) => <li key={i}>{item}</li>);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchReq = async () => {
    const res = await (await getRecipe(ingredients.join(","))).json();
    return res;
  };

  return (
    <section id="search-page">
      <form action="" method="post">
        <section id="search-field">
          <input type="search" placeholder="Add ingredients" ref={inputRef} />

          <input
            type="button"
            value="Search Recipe"
            onClick={async () => {
              setIngredients([...ingredients, inputRef!.current!.value]);
              const recipeResults = await fetchReq();
              const recipeLabel = recipeResults?.hits[0]?.recipe?.label;
              setRecipe(recipeLabel);
              setRecipeImage(recipeResults?.hits[0]?.recipe?.image);
            }}
          />
        </section>
        <sub>Ingredients</sub>
      </form>

      <section id="ingredients">
        <ul>{list(ingredients)}</ul>
      </section>

      <section>
        <h3>Recipes</h3>
        <span>{recipe}</span>
        <img src={recipeImage} alt="" />
      </section>
    </section>
  );
};
