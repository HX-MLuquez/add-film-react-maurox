import React, { useState } from "react";
import "../FormListFilm.css";

import { store } from "../store/index.js";
import { addOneFilm, deleteOneFilm } from "../store/actions.js";

export default function FormListFilm({ renderActionExport }) {
  const [formData, setFormData] = useState({
    title: "",
    estreno: "",
    genero: "",
    id: "",
    idDelete: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log("name:::value:::", name, value)
    const updatedValue = value !== undefined ? value : "";
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  }

  function addFilm(e) {
    e.preventDefault();
    store.dispatch("ADD_PELI", addOneFilm(formData));
    setFormData({
      title: "",
      estreno: 1999,
      genero: "",
      id: "",
      idDelete: "",
    });
    renderActionExport();
  }

  function deleteByIdFilm() {
    store.dispatch("DELETE_PELI", deleteOneFilm(formData.idDelete));
    setFormData({
      title: "",
      estreno: "",
      genero: "",
      id: "",
      idDelete: "",
    });
    renderActionExport();
  }
  return (
    <div className="card">
      <form onSubmit={addFilm}>
        <div className="formList">
          <label>
            Id:{" "}
            <input
              type="number"
              name="id"
              key="id"
              onChange={handleChange}
              value={formData.id}
            ></input>
          </label>
          <label>
            Título:{" "}
            <input
              type="text"
              name="title"
              value={formData.title}
              key="title"
              onChange={handleChange}
            ></input>
          </label>

          <label>
            Estreno:{" "}
            <input
              type="number"
              name="estreno"
              value={formData.estreno}
              key="estreno"
              onChange={handleChange}
            ></input>
          </label>

          <label>
            Género:{" "}
            <input
              type="text"
              name="genero"
              value={formData.genero}
              key="genero"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="btton">
          <button type="submit">Agregar Película</button>
        </div>
      </form>
      <div className="btton">
        <label>
          Id Film a eliminar:{" "}
          <input
            type="number"
            name="idDelete"
            key="idDelete"
            onChange={handleChange}
            value={formData.idDelete}
          ></input>
        </label>
        <button onClick={deleteByIdFilm}>Eliminar Película</button>
      </div>
    </div>
  );
}
