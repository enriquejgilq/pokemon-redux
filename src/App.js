import 'antd/dist/reset.css';
import { useEffect } from 'react';
import { Col, Spin } from 'antd'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import './App.css';
import { getPokemons } from './api';
import { getPokemonWithDetails, setLoaging } from './actions';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoaging(true))
      const pokemonRes = await getPokemons()
      dispatch(getPokemonWithDetails(pokemonRes))
      dispatch(setLoaging(false))

    }
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Logo' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading ?
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col> : (
            <PokemonList pokemons={pokemons} />
          )
      }
    </div>
  );
}

export default App
