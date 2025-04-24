import { useState } from "react";

export const Input = ({ handleNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    // console.log({ eventTarget: event.target, inputValue });
    handleNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          placeholder="Search for a gif"
          onChange={handleInputChange}
          value={inputValue}
          minLength={2}
        ></input>
      </form>
    </>
  );
};
