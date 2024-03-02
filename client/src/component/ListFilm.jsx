import React from "react";
import "../ListFilm.css";

import { store } from "../store/index.js";

export default function ListFilm() {
  //console.log(store.getState());

  const films = store.getState().films;
  // console.log("films ---> ", films);
  return (
    <div className="listFilm">
      {films.length > 0 && films?.map((film, index) => {
        return (
          <div key={film.id} className="film">
            <p>Id: {film.id}</p>
            <h2>Título: {film.title}</h2>
            <h3>Estreno: {film.estreno}</h3>
            <p>Género: {film.genero}</p>
          </div>
        );
      })}
    </div>
  );
}
