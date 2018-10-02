import Betting from '../components/Betting'
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    contract: state.contracts.Betting,
  }
}

const BettingContainer = drizzleConnect(Betting, mapStateToProps)
export default BettingContainer