import React, { useState } from "react";
import "../FormListFilm.css";

import { store } from "../store/index.js";
import { addOneFilm, deleteOneFilm } from "../store/actions.js";
import { genders, lefthNumYear, rightNumYear } from "../utils/data.js";
import generateID from "../utils/generateId.js";

export default function FormListFilm({ renderActionExport }) {
  const [formData, setFormData] = useState({
    title: "",
    estrenoLefth: "19",
    estrenoCenter: "0",
    estrenoRight: "0",
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
  function clearStateAndRender() {
    setFormData({
      title: "",
      estrenoLefth: "19",
      estrenoCenter: "0",
      estrenoRight: "0",
      genero: "",
      id: "",
      idDelete: "",
    });
    renderActionExport();
  }
  function addFilm(e) {
    e.preventDefault();
    if (formData.title === "") {
      alert("Debe escribir un título")
      return
    }
    const newId = generateID()
    const objData = { id: newId }

    if (formData.genero === "") {
      objData.genero = "No determinado"
    }
    setFormData({
      ...formData,
      ...objData
    })
    store.dispatch("ADD_PELI", addOneFilm({ ...formData, ...objData }));
    clearStateAndRender()
  }

  function deleteByIdFilm() {
    if(formData.idDelete===""){
      alert("Debe insertar un ID válido")
      return
    }
    store.dispatch("DELETE_PELI", deleteOneFilm(formData.idDelete));
    clearStateAndRender()
  }
  return (
    <div className="card">
      <form onSubmit={addFilm}>
        <div className="formList">
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
            <select
              name="estrenoLefth"
              value={formData.estrenoLefth}
              key="estrenoLefth"
              onChange={handleChange}
            >
              {
                lefthNumYear?.map((l, index) => {
                  return (
                    <option key={"11" + index} value={l}>{l}</option>
                  )
                })
              }</select>
            <select
              name="estrenoCenter"
              value={formData.estrenoCenter}
              key="estrenoCenter"
              onChange={handleChange}
            >
              {
                rightNumYear?.map((c, index) => {
                  return (
                    <option key={"22" + index} value={c}>{c}</option>
                  )
                })
              }</select>
            <select
              name="estrenoRight"
              value={formData.estrenoRight}
              key="estrenoRight"
              onChange={handleChange}
            >
              {
                rightNumYear?.map((r, index) => {
                  return (
                    <option key={"33" + index} value={r}>{r}</option>
                  )
                })
              }</select>

          </label>

          <label>
            Género:{" "}
            <select
              name="genero"
              value={formData.genero}
              key="genero"
              onChange={handleChange}
            >
              <option value="" hidden>Seleccionar Género</option>
              {
                genders?.map((gender, index) => {
                  return (
                    <option key={index} value={gender}>{gender}</option>
                  )
                })
              }
            </select>
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
