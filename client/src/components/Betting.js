import React, { Component } from 'react'
import './../index.css'
import PropTypes from 'prop-types'

class Betting extends Component {
  constructor(props, context) {
    super(props)
    this.Betting = context.drizzle.contracts.Betting;
    this.state = {
      totalSlots: null,
      totalBet: null,
      numberOfBets: null,
      lastWinnerNumber: null,
    }
  }

  componentDidMount() {
    const contract = this.Betting;
    const totalSlots = contract.methods.totalSlots.cacheCall()
    const totalBet = contract.methods.totalBet.cacheCall()
    const numberOfBets = contract.methods.numberOfBets.cacheCall()
    const lastWinnerNumber = contract.methods.lastWinnerNumber.cacheCall()

    this.setState({ totalSlots, totalBet, numberOfBets, lastWinnerNumber })
  }

  render() {
    const web3 = window.web3
    const contract = this.props.contract;
    const totalSlots = contract.totalSlots[this.state.totalSlots]
    const totalBet = contract.totalBet[this.state.totalBet]
    const numberOfBets = contract.numberOfBets[this.state.numberOfBets]
    const lastWinnerNumber = contract.lastWinnerNumber[this.state.lastWinnerNumber]
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
                { totalBet && web3.fromWei(totalBet.value) } ETH
              </span>
              <span className="count-name">Total Betted</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Betting.contextTypes = {
  drizzle: PropTypes.object
}

export default Betting