import React from 'react'
import './../index.css'

class Account extends React.Component {
  render() {
    const { drizzle, drizzleState } = this.props;
    const initialized = drizzleState.drizzleStatus;
    if (!initialized) return "Loading Account...."
    const web3 = window.web3;
    const account = drizzleState.accounts[0];
    const balance = web3.fromWei(drizzleState.accountBalances[account]);
    return (
      <div>
        <div>
          <span>Account: { account }</span>
        </div>
        <div>
          <span>Balance: { balance } ETH</span>
        </div>
      </div>
    )
  }
}

export default Account;