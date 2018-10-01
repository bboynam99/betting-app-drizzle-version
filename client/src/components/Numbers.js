import React, { Component } from 'react'

class Numbers extends Component {
  state = { stackId: null }

  bet = e => {
    console.log(e.target.textContent)
    const betNumber = parseInt(e.target.textContent);
    console.log("bet value = " + betNumber)
    const { drizzle, drizzleState } = this.props
    const contract = drizzle.contracts.Betting;

    const stackId = contract.methods.bet.cacheSend(betNumber, { value: window.web3.toWei(1, 'ether') })
    this.setState({ stackId })
  }

  render() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const listItem = data.map(d => <button type="button" key={d} onClick={this.bet} className="btn bet-number btn-danger btn-circle btn-xl">{ d }</button>)
    return (
      <div>
        { listItem }
      </div>
    )
  }
}

export default Numbers;