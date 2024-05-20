import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles['thead-row']}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={styles['tbody-row']}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionHistory;
