function TransactionItem({
    id,
    type,
    title,
    amount,
    onTransactionDelete,
    onTransactionEdit
}) {

    function onDelete() {
        onTransactionDelete(id);
    }

    return (
        <div className="transaction-row">
            <span className="transaction-title">
                {title}
            </span>

            {type === "income" ? (
                <span className="transaction-amount">
                    {"+" + "₹" + amount}
                </span>
            ) : (
                <span className="transaction-amount">
                    {"-" + "₹" + amount}
                </span>
            )}

            <button
                type="button"
                onClick={onDelete}
            >
                Delete
            </button>
            {onTransactionEdit && (
    <button
        type="button"
        onClick={() => onTransactionEdit(id)}
    >
        Edit
    </button>
)}
        </div>
    );
};

export default TransactionItem;