import Betting from '../components/Betting'
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contract: state.contracts.Betting,
    initialized: state.drizzleStatus.initialized,
  }
}

const BettingContainer = drizzleConnect(Betting, mapStateToProps)
export default BettingContainer