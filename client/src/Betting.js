import React, { Component } from "react"

class Betting extends Component {
  state = { owner: null }

  async componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Betting;
    const owner = await contract.methods.owner().call()
    console.log(owner)
    this.setState({ owner })
  }

  render() {
    // const { Betting } = this.props.drizzleState.contracts;
    // const owner = Betting.owner[this.state.owner];
    // console.log(owner)
    return (
      <div>owner: {this.state.owner}</div>
    )
  }
}

export default Betting;