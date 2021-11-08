import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      dispatch(getNameCountries(name));
      setName("");
    } else {
      alert("Enter the name of the countries to search");
    }
  }
  return (
    <div>
      <input
        className={style.searchbar}
        type="text"
        placeholder="Search Countries..."
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button
        className={style.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}
