import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails, getPokemonByName } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const fetchPokemon = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (pokemonName, { dispatch }) => {
        dispatch(setLoading(true));

        try {
            const pokemonsRes = await getPokemonByName(pokemonName);
            if (pokemonsRes.name) {
                dispatch(setPokemons([pokemonsRes]));
            }
            if (pokemonsRes.message) {
                dispatch(setPokemons([]));
            }
            dispatch(setLoading(false));
        } catch (error) {
            console.error('Error al obtener el Pokémon:', error);
            dispatch(setPokemons([]));
            dispatch(setLoading(false));
        }
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
    },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
