// import './App.css'
import React, { Component } from 'react';
import Betting from './Betting'
import { DrizzleContext } from 'drizzle-react'

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext
          if (!initialized) return "Contract Loading...";
          return <Betting drizzle={drizzle} drizzleState={drizzleState} />
        }}
      </DrizzleContext.Consumer>
    )
  }
}
export default App;