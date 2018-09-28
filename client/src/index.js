import React from 'react';
import ReactDOM from 'react-dom';
import { DrizzleProvider } from 'drizzle-react'
import './index.css';

import App from './App';

import drizzleOptions from './drizzleOptions'

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions}>
    <App />
  </DrizzleProvider>,
  document.getElementById('root')
);