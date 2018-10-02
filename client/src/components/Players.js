import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Players extends Component {
  constructor(props, context) {
    super(props);
    this.contract = context.drizzle.contracts.Betting
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    const contract = this.contract
    let players = []
    contract.methods.numberOfBets().call().then(total => {
      if (total > 0) {
        for (var i = 0; i < total; i++) {
          players.push(contract.methods.players.cacheCall(i))
        }
        this.setState(prevState => ({ ...prevState, players }))
      }
    })
  }

  render() {
    const contract = this.props.contract
    const players = this.state.players;
    if (this.state.players.length > 0 && Object.keys(contract.players).length > 0) {
      const playersList = players.map((item, index) => <div key={index}>Player {index+1}: <span id={'player' + (index+1)}>{contract.players[item].value}</span></div>)
      return (
        <div>
          { playersList }
        </div>
      )
    }
    return ""
  }
}

Players.contextTypes = {
  drizzle: PropTypes.object
}

export default Players