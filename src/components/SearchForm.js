import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputContainer = useRef("");

  React.useEffect(() => {
    inputContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // 避免按下enter刷新
  };

  const handleOnchange = () => {
    setSearchTerm(inputContainer.current.value);
  };

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="search">Search Your Favorite Cocktail</label>
          <input
            id="search"
            type="text"
            ref={inputContainer}
            onChange={handleOnchange}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
