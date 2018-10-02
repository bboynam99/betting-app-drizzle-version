import Players from '../components/Players'
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    contract: state.contracts.Betting,
    drizzleStatus: state.drizzleStatus
  }
}

const PlayersContainer = drizzleConnect(Players, mapStateToProps)
export default PlayersContainer