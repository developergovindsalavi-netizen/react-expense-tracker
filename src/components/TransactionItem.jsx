function TransactionItem({ type,title, amount }) {
    return (
        <div className="transaction-row">
            <span className="transaction-title">{title}</span>
            {type==="income"?<span className="transaction-amount">{"+₹"+amount}</span>
            :<span className="transaction-amount">{"-₹"+amount}</span>}
        </div>
    );
}

export default TransactionItem;