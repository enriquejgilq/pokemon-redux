import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import { logger } from './middleware';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer = composeAlt(applyMiddleware(thunk, logger))
const store = createStore(pokemonReducer, composedEnhancer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


