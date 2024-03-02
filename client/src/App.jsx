import { useState } from "react";

import "./App.css";

import { store, root_reducer } from "./store/index.js";
import FormListFilm from "./component/FormListFilm.jsx";
import ListFilm from "./component/ListFilm.jsx";
// crear Estado inicial
const initialState = {
  films: [],
  numPage: 0,
  data: {
    admin: "Mau",
    id: 332,
  },
};
// Inicializar el reducer para que tome un estado inicial y conectar a nuestro reducer
// pasando como segundo params la función root_reducer
//* Para icorporar un consologeo tipo devTools se debe pasar como tercer params un booleano "true"
store.initialState(initialState, root_reducer, true);

// consologeo a modo de ir revisando
// console.log("init getState --> ", store.getState());

function App() {
  const [renderAction, setRenderAction] = useState(true);

function renderActionExport(){
    setRenderAction(!renderAction)
  }
  return (
    <>
      <div>
        <h1>Add Film | maurox-store</h1>
      </div>
      <FormListFilm renderActionExport={renderActionExport}></FormListFilm>
      <ListFilm></ListFilm>

      <p className="read-the-docs">
        Esta pequeña app utiliza la librería maurox-store para el manejo de
        estados globales
      </p>
    </>
  );
}

export default App;
