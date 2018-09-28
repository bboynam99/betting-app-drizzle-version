// import './App.css'
import React, { Component } from 'react';

import { drizzleConnect } from 'drizzle-react'
import { ContractData, ContractForm } from 'drizzle-react-components'

class App extends Component {
  render() {
    const { drizzleStatus, accounts } = this.props

    if (!drizzleStatus.initialized) return "Contract Loading...";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Betting App</h1>
          <p>
            <strong>Your Address: </strong>
            <ContractData
              contract="Betting"
              method="lastWinnerNumber"
            />
          </p>
          <p>
            <strong>Last Winner Number: </strong>
            <ContractData
              contract="Betting"
              method="lastWinnerNumber"
            />
          </p>
          <p>
            <strong>Total Slot:  </strong>
            <ContractData
              contract="Betting"
              method="totalSlots"
            />
          </p>
          <p>
            <strong>Number of Bets:  </strong>
            <ContractData
              contract="Betting"
              method="numberOfBets"
            />
          </p>
          {/* <p>
            <strong>Players </strong>
            <ContractData
              contract="Betting"
              method="players"
              methodArgs={[0]}
            />
          </p> */}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    Betting: state.contracts.Betting
  }
}

const AppContainer = drizzleConnect(App, mapStateToProps)
export default AppContainer;