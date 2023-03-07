import React, { useRef, useState } from "react";
import './search-page.scss'

export const SearchPage = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const list = (items: string[]) => {
    return items.map((item, i) => <li key={i}>{item}</li>);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section id="search-page">
      <form action="" method="post">
        <section id="search-field">
          <input type="search" placeholder="Add ingredients" ref={inputRef} />

          <input
            type="button"
            value="Search Recipe"
            onClick={() => {
              setIngredients([...ingredients, inputRef!.current!.value]);
            }}
          />
        </section>
      </form>
      <section id="ingredients">
        <ul>{list(ingredients)}</ul>
      </section>
    </section>
  );
};
