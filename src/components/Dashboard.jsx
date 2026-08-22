import SummaryCard from "./SummaryCard";
import TransactionItem from "./TransactionItem";

function Dashboard() {

    const transactions = [
        {
            id: 1,
            title: "Food",
            amount: 5000,
            type: "expense"
        },
        {
            id: 2,
            title: "Shopping",
            amount: 2000,
            type: "expense"
        },
        {
            id: 3,
            title: "Fuel",
            amount: 1000,
            type: "expense"
        },
        {
            id: 4,
            title: "Electricity",
            amount: 1500,
            type: "expense"
        },
        {
            id: 5,
            title: "Internet",
            amount: 700,
            type: "expense"
        },
        {
            id: 6,
            title: "Movie",
            amount: 500,
            type: "expense"
        },
        {
            id: 7,
            title: "Rent",
            amount: 6000,
            type: "expense"
        },
        {
            id: 8,
            title: "Salary",
            amount: 50000,
            type: "income"
        }
    ];

    const totalExpenses=transactions.filter((item)=>item.type==="expense").reduce((acc, item) => acc + item.amount, 0);
    const totalIncome=transactions.filter((item)=>item.type==="income").reduce((acc, item) => acc + item.amount, 0);
    const balance=totalIncome-totalExpenses;

    return (
        <>
            <h2 className="dashboard-title">Dashboard</h2>
            <div className="card-container">
                <SummaryCard title="Income" amount={totalIncome} />
                <SummaryCard title="Expense" amount={totalExpenses} />
                <SummaryCard title="Balance" amount={balance} />
            </div>
            <h3>Recent Transactions</h3>
            <div className="transaction-list">
                {
                    transactions.map((item)=>{
                        return <TransactionItem key={item.id} title={item.title} amount={item.amount} type={item.type} />
                    })
                }
            </div>

        </>
    );
}

export default Dashboard;