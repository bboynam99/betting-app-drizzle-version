import Betting from "./contracts/Betting.json"

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  contracts: [
    Betting
  ],
  events: {}
  // polls: {
  //   accounts: 1500
  // }
}

export default drizzleOptions;