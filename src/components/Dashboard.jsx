import { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import TransactionItem from "./TransactionItem";
import AddTransaction from "./AddTransaction";

function Dashboard() {


    const [transactions, setTransactions] = useState(() => {
        let localData = localStorage.getItem("transactions");

        return localData
            ?
            JSON.parse(localData)
            : []
    });

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    function clearTransactions() {
        setTransactions([]);
    }


    function addTransaction(item) {
        setTransactions((previousTransactions) => [
            ...previousTransactions,
            item
        ]);
    }

    function deleteTransaction(id) {
        setTransactions((previousTransactions) =>
            previousTransactions.filter((item) => item.id !== id)
        );
    }

    const totalExpenses = transactions.filter((item) => item.type === "expense").reduce((acc, item) => acc + item.amount, 0);
    const totalIncome = transactions.filter((item) => item.type === "income").reduce((acc, item) => acc + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    return (
        <>
            <h2 className="dashboard-title">Dashboard</h2>
            <div className="card-container">
                <SummaryCard title="Income" amount={totalIncome} />
                <SummaryCard title="Expense" amount={totalExpenses} />
                <SummaryCard title="Balance" amount={balance} />
            </div>
            <button
                type="button"
                onClick={clearTransactions}
            >
                Clear All Transactions
            </button>
            <div className="transactions-container">

                <div className="transaction-list">
                    <h3>Recent Transactions</h3>
                    {
                        transactions.map((item) => {
                            return <TransactionItem onTransactionDelete={deleteTransaction} key={item.id} id={item.id} title={item.title} amount={item.amount} type={item.type} />
                        })
                    }
                </div>
                <div className="transaction-form-wrapper">
                    <AddTransaction onAddTransaction={addTransaction} />
                </div>
            </div>

        </>
    );
}

export default Dashboard;