import Numbers from '../components/Numbers'
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    contract: state.contracts.Betting
  }
}

const NumbersContainer = drizzleConnect(Numbers, mapStateToProps)
export default NumbersContainer