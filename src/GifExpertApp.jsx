import { useState } from "react";
import { Input, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const handleNewCategory = (value) => {
    // const { value } = target[0];
    if (isDuplicate(value, categories)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpert App</h1>
      <Input
        //categories={categories}
        //setCategories={setCategories}
        handleNewCategory={handleNewCategory}
      ></Input>

      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};

const isDuplicate = (value, categories) => {
  let isDuplicated = false;
  categories.forEach((category) => {
    if (category.toLowerCase() === value.toLowerCase()) isDuplicated = true;
  });

  return isDuplicated;
};
