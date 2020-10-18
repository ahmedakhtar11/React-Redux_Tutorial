import axios from "axios";


// Pokemon1
export const loadCharmander = () => {
    return(dispatch)=>{
            return axios.get("https://pokeapi.co/api/v2/pokemon/4").then((response)=>{
                  dispatch(changePokemon(response.data));
                  console.log(response)
        })
    }
}

// Pokemon1
export function changePokemon(pokemon){
    return{
        type:"POKEMON1",
        pokemon:pokemon,
    }
}

