import React from 'react'
import './../index.css'

class Account extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.accounts)
  }

  render() {
    const web3 = window.web3;
    const account = this.props.accounts[0];
    const balance = web3.fromWei(this.props.accountBalances[account]);
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

export default Account