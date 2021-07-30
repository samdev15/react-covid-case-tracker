import React from 'react';
import ReactDOM from 'react-dom';
import StateWiseData from './component/StateWise/StateWiseData';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
//import PokemonApi from './PokemonApi';

ReactDOM.render(
  <StateWiseData />,
  //<PokemonApi />,
  document.getElementById('root')
);
