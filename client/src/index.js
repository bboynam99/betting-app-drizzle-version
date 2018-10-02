import React from 'react';
import ReactDOM from 'react-dom';
import { DrizzleProvider } from 'drizzle-react'

import './index.css';

import App from './App';
import LoadingContainer from './containers/LoadingContainer'

import store from './store'

import options from './drizzleOptions'
// const drizzleStore = generateStore(drizzleOptions)
// const drizzle = new Drizzle(drizzleOptions, drizzleStore)

ReactDOM.render(
  <DrizzleProvider options={options}>
    <LoadingContainer>
      <App />
    </LoadingContainer>
  </DrizzleProvider>,
  document.getElementById('root')
);