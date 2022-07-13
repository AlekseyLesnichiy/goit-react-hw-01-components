import PropTypes from 'prop-types';
import { TrTH } from './TransactionHistory.styled';
import { Table } from './TransactionHistory.styled';
import { TableBody } from './TransactionHistory.styled';
import {TableTD} from './TransactionHistory.styled'
export const TransactionHistory = ({items}) => {
    return <Table >
  <thead>
    <tr>
      <TrTH>Type</TrTH>
      <TrTH>Amount</TrTH>
      <TrTH>Currency</TrTH>
    </tr>
  </thead>

  <TableBody>
    {items.map(({ type, amount, currency, id }) =>
    <tr  key = {id}>
            <TableTD>{type}</TableTD>
            <TableTD>{ amount}</TableTD>
            <TableTD>{ currency}</TableTD>
    </tr>)}
      
  </TableBody>
    </Table>
        
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired

}