import SummaryCard from "./SummaryCard";
import TransactionItem from "./TransactionItem";

function Dashboard() {
    return (
        <>
            <h2 className="dashboard-title">Dashboard</h2>
            <div className="card-container">
                <SummaryCard title="Income" amount="₹80,000" />
                <SummaryCard title="Expense" amount="₹42,500" />
                <SummaryCard title="Balance" amount="₹37,500" />
            </div>
            <div className="transaction-list">
                <TransactionItem title="Food" amount="₹5,000"/>
                <TransactionItem title="Shopping" amount="₹3,000"/>
                <TransactionItem title="Fuel" amount="₹1,000"/>
            </div>

        </>
    );
}

export default Dashboard;