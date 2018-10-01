// import './App.css'
import React, { Component } from 'react';
import Account from './components/Account'
import Betting from './components/Betting'
import Numbers from './components/Numbers'
import Players from './components/Players'
import { DrizzleContext } from 'drizzle-react'

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext
          if (!initialized) return "Contract Loading...";
          return (
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  <h1>Yolo Betting</h1>
                  <Account drizzle={drizzle} drizzleState={drizzleState} />
                  <hr />
                  <Betting drizzle={drizzle} drizzleState={drizzleState} />
                  <hr />
                  <Numbers drizzle={drizzle} drizzleState={drizzleState} />
                  <hr />
                  <Players drizzle={drizzle} drizzleState={drizzleState} />
                </div>
              </div>
            </div>
          )
        }}
      </DrizzleContext.Consumer>
    )
  }
}
export default App;