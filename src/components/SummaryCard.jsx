function SummaryCard({ title, amount }) {
    return (
        <div className="dashboard-card">
            <h5>{title}</h5>
            <p className="amount">{amount}</p>
        </div>
    );
}

export default SummaryCard;