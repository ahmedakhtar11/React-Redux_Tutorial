// Initial State:
let initialState = {
    name: "Charmander",
    pokemon: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON1":
            return {
                ...state,
                pokemon: action.pokemon,
            };

        default:
            return state;
    }
}

export default appReducer;