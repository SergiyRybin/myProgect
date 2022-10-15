import s from "./Transaction.module.css";

type TransactionHistoryTypes = {
  amount: string;
  currency: string;
  id: string;
  type: string;
}

type Iprops = {
  items: TransactionHistoryTypes[];
}

const TransactionHistory: React.FC<Iprops> = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((items, index) => (
        <tbody key={items.id}>
          <tr className={`${index % 2 === 0 && s.tbodySecond }` }>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
