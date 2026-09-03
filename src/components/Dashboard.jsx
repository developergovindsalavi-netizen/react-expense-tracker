import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import Summary from "./Summary";
import useTransactionContext from "../hooks/useTransactionContext";
import Button from "./Button";
import ConfirmDialog from "./ConfirmDialog";
import { useState } from "react";
import Loading from "./Loading";


function Dashboard() {

    const {
        transactions,
        clearTransactions,
        addTransaction,
        deleteTransaction,
        loading,
        error
    } = useTransactionContext();

    const [showConfirm, setShowConfirm] = useState(false);

    function onConfirmCallback() {
        clearTransactions();
        setShowConfirm(false);
    }

    function onConfirmationCancelCallback() {
        setShowConfirm(false);
    }

    function setConfirmDialogVisible(){
        setShowConfirm(true);
    }

    if (loading) {
        return <Loading message={"Loading transactions..."} />;
    }
    if (error) {
        return <p>{error}</p>;
    }


    const totalExpenses = transactions.filter((item) => item.type === "expense").reduce((acc, item) => acc + item.amount, 0);
    const totalIncome = transactions.filter((item) => item.type === "income").reduce((acc, item) => acc + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    const summaryData = [
        {
            id: 1,
            title: "Income",
            amount: totalIncome
        },
        {
            id: 2,
            title: "Expense",
            amount: totalExpenses
        },
        {
            id: 3,
            title: "Balance",
            amount: balance
        }
    ]

    
    return (
        <>
            <h2 className="dashboard-title">Dashboard</h2>

            <Summary summaryData={summaryData} />

            <Button type={"button"} onClick={setConfirmDialogVisible}>Clear All Transactions</Button>

            {
                showConfirm ?
                <ConfirmDialog onConfirm={onConfirmCallback} onCancel={onConfirmationCancelCallback} >
                    Are you sure you want to delete all transactions?
                </ConfirmDialog>:''
            }

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