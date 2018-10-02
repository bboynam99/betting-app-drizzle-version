// import './App.css'
import React, { Component } from 'react';
import AccountContainer from './containers/AccountContainer'
import Betting from './components/Betting'
import Numbers from './components/Numbers'
import Players from './components/Players'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1>Yolo Betting</h1>
            <AccountContainer />
            {/* <hr />
            <Betting/>
            <hr />
            <Numbers/>
            <hr />
            <Players/> */}
          </div>
        </div>
      </div>
    )
  }
}
export default App