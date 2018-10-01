import React, { Component } from 'react'
import './../index.css'

class Betting extends Component {
  state  = {
    totalSlots: null,
    totalBet: null,
    numberOfBets: null,
    lastWinnerNumber: null,
  }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Betting;
    const totalSlots = contract.methods.totalSlots.cacheCall()
    const totalBet = contract.methods.totalBet.cacheCall()
    const numberOfBets = contract.methods.numberOfBets.cacheCall()
    const lastWinnerNumber = contract.methods.lastWinnerNumber.cacheCall()

    this.setState({ totalSlots, totalBet, numberOfBets, lastWinnerNumber })
  }

  render() {
    const { Betting } = this.props.drizzleState.contracts;
    const web3 = window.web3;
    const totalSlots = Betting.totalSlots[this.state.totalSlots];
    const totalBet = Betting.totalBet[this.state.totalBet];
    const numberOfBets = Betting.numberOfBets[this.state.numberOfBets];
    const lastWinnerNumber = Betting.lastWinnerNumber[this.state.lastWinnerNumber];
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter player">
              <i className="fa fa-users"></i>
              <span className="count-numbers" id="total-slots">
                { totalSlots && totalSlots.value }
              </span>
              <span className="count-name"> All Slots</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter last-winner">
              <i className="fa fa-trophy"></i>
              <span className="count-numbers" id="last-winner-number">
                { lastWinnerNumber && lastWinnerNumber.value }
              </span>
              <span className="count-name">Last Win Number</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter bet-value">
              <i className="fa fa-ticket-alt"></i>
              <span className="count-numbers" id="number-of-bets">
                { numberOfBets && numberOfBets.value }
              </span>
              <span className="count-name">Number of Bets</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter total-bet">
              <i className="fab fa-ethereum"></i>
              <span className="count-numbers" id="total-bet">
                { totalBet && totalBet.value }
              </span>
              <span className="count-name">Total Betted</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Betting;