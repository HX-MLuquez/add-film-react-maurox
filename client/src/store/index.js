import maurox from "maurox-store"
// const maurox = require("maurox-store");
// y crear la instancia de este exportando
export const store = maurox();
// consologear a modo de testear su conexión
// console.log("----> ", store);


// Reducer estructura
export function root_reducer(state = initialState, type, payload) {
    // console.log("in reducer");
    switch (type) {
      case "ADD_PELI":
        // console.log("in reducer add peli, payload is ---> ", payload);
        const films = [...state.films, payload];
        // console.log(".....", films);
        return {
          ...state,
          films: [...films],
        };
      case "DELETE_PELI":
        // console.log("in reducer add peli, payload is ---> ", payload);
        const filmsFilter = state.films.filter((e) => e.id !== payload);
        // console.log(".....", filmsFilter)
        return {
          ...state,
          films: [...filmsFilter],
        };
  
      default:
        return state;
    }
  }