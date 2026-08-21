function TransactionItem({ title, amount }) {
    return (
        <div className="transaction-row">
            <span className="transaction-title">{title}</span>
            <span className="transaction-amount">{amount}</span>
        </div>
    );
}

export default TransactionItem;