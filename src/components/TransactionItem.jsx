function TransactionItem({
    id,
    type,
    title,
    amount,
    onTransactionDelete
}) {

    function onDelete() {
        onTransactionDelete(id);
    }

    return (
        <div className="transaction-row">
            <span className="transaction-title">{title}</span>
            {type === "income"
                ?
                <span className="transaction-amount">{"+₹" + amount}</span>
                :
                <span className="transaction-amount">{"-₹" + amount}</span>
            }
            <button
                type="button"
                onClick={onDelete}
            >
                Delete</button>
        </div>
    );
}

export default TransactionItem;