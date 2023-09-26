import { getPokemonDetails } from "../api"
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types"


export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload: payload

})

export const setLoaging = (payload) => ({
    type: SET_LOADING,
    payload,
})

export const setFavotite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

export const getPokemonWithDetails =
    (pokemon = []) =>
        async (dispatch) => {
            const pokemonDetails = await Promise.all(
                pokemon.map(pokemon => getPokemonDetails(pokemon)))
            dispatch(setPokemons(pokemonDetails))
        }
