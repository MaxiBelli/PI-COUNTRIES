import React from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../../redux/actions";
import style from "./ReloadCountries.module.css";

export default function ReloadCountries() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  return (
    <div>
      <button
        className={style.button}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        All Countries
      </button>
    </div>
  );
}
