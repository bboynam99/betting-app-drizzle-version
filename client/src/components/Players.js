import React, { Component } from 'react'

class Players extends Component {
  state = {
    totalSlots: null,
    players: []
  }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Betting;
    const totalSlots = contract.methods.totalSlots.cacheCall();
  }

  render() {
    const { drizzle , drizzleState } = this.props
    return ""
  }
}

export default Players;