import React, { Component } from "react"

class Betting extends Component {
  state = { cacheOwner: null }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Betting;
    const cacheOwner = contract.methods.owner.cacheCall()
    this.setState({ cacheOwner })
  }

  render() {
    const { Betting } = this.props.drizzleState.contracts;
    const owner = Betting.owner[this.state.cacheOwner]
    return (
      <div>owner: {owner && owner.value}</div>
    )
  }
}

export default Betting;