


import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import Summary from "./Summary";

function Dashboard({transactions,
        clearTransactions,
        addTransaction,
        deleteTransaction}) {

    const totalExpenses = transactions.filter((item) => item.type === "expense").reduce((acc, item) => acc + item.amount, 0);
    const totalIncome = transactions.filter((item) => item.type === "income").reduce((acc, item) => acc + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    return (
        <>
            <h2 className="dashboard-title">Dashboard</h2>
            <Summary
                totalIncome={totalIncome}
                totalExpenses={totalExpenses}
                balance={balance}
            />
            <button
                type="button"
                onClick={clearTransactions}
            >
                Clear All Transactions
            </button>
            <div className="transactions-container">
                <TransactionList onTransactionDelete={deleteTransaction} transactions={transactions} />

                <div className="transaction-form-wrapper">
                    <AddTransaction onAddTransaction={addTransaction} />
                </div>
            </div>

        </>
    );
}

export default Dashboard;