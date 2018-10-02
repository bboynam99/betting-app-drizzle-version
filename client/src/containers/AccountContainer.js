import Account from '../components/Account'
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances,
    contract: state.contracts.Betting,
    drizzleStatus: state.drizzleStatus
  }
}

const AccountContainer = drizzleConnect(Account, mapStateToProps)

export default AccountContainer