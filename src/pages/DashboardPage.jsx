import Dashboard from "../components/Dashboard";

function DashboardPage({transactions,
        clearTransactions,
        addTransaction,
        deleteTransaction}) {
    return <Dashboard transactions={transactions} clearTransactions={clearTransactions} 
    addTransaction={addTransaction} deleteTransaction={deleteTransaction} />;
}

export default DashboardPage;