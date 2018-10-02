import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Numbers extends Component {
  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.Betting;
  }

  bet = e => {
    const betNumber = parseInt(e.target.textContent);
    console.log("bet value = " + betNumber)
    const contract = this.contract;
    const txHash = contract.methods.bet.cacheSend(betNumber, { value: window.web3.toWei(1, 'ether') })
    console.log('Tx Hash = ' + txHash)
  }

  render() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const listItem = data.map((d, index) => <button type="button" key={index} onClick={this.bet} className="btn bet-number btn-danger btn-circle btn-xl">{ d }</button>)
    return (
      <div>
        { listItem }
      </div>
    )
  }
}

Numbers.contextTypes = {
  drizzle: PropTypes.object
}

export default Numbers;