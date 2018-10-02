// import './App.css'
import React, { Component } from 'react';
import AccountContainer from './containers/AccountContainer'
import BettingContainer from './containers/BettingContainer'
import NumbersContainer from './containers/NumbersContainer'
import PlayersContainer from './containers/PlayersContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1>Yolo Betting</h1>
            <AccountContainer />
             <hr />
            <BettingContainer />
            <hr />
            <NumbersContainer />
            <hr />
            <PlayersContainer />
          </div>
        </div>
      </div>
    )
  }
}
export default App