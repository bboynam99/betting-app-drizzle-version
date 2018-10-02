import React from 'react';
import ReactDOM from 'react-dom';
import { DrizzleProvider } from 'drizzle-react'
import './index.css';

import options from './drizzleOptions'

import App from './App';
import LoadingContainer from './containers/LoadingContainer'

ReactDOM.render(
  <DrizzleProvider options={options}>
    <LoadingContainer>
      <App />
    </LoadingContainer>
  </DrizzleProvider>,
  document.getElementById('root')
);