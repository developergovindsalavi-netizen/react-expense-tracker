import { useState } from "react";

import TransactionItem from "../components/TransactionItem";
import useTransactionContext from "../hooks/useTransactionContext";
import Loading from "../components/Loading";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import AddTransaction from "../components/AddTransaction";

function TransactionsPage() {

    const { addTransaction, updateTransaction, deleteTransaction, transactions, loading, error } = useTransactionContext();

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [editingTransaction, setEditingTransaction] = useState(null);


    if (loading) {
        return <Loading message="Loading transactions..." />;
    }

    if (error) {
        return <p>{error}</p>;
    }


    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    const filteredTransactions = transactions
        .filter((item) =>
            item.title.toLowerCase().includes(normalizedSearchTerm) ||
            item.amount.toString().includes(normalizedSearchTerm)
        )
        .filter((item) =>
            typeFilter === "all" ||
            item.type === typeFilter
        );

    function handleEdit(id) {
        setEditingTransaction(transactions.find((item) => item.id === id));
    }


    return (
        <div>
            <h2>Transactions</h2>
            <div>Search :
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search Transactions..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type={"button"} onClick={() => setSearchTerm("")}>Clear Search</Button>
            </div>
            <div>
                Type :
                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div>
                <br />
                <div className="transactions-container">
                    <div className="transaction-list">
                        {
                            transactions.length === 0
                                ?
                                <EmptyState message="You don't have any transactions yet." />
                                :
                                filteredTransactions.length === 0
                                    ? <EmptyState message="No transactions found." />
                                    :
                                    filteredTransactions.map((item) => {
                                        return <TransactionItem
                                            onTransactionDelete={deleteTransaction}
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            amount={item.amount}
                                            type={item.type}
                                            onTransactionEdit={handleEdit}
                                        />
                                    })
                        }
                        <br />
                        <p>Showing {filteredTransactions.length} of {transactions.length} transactions</p>
                    </div>
                    <div className="transaction-form-wrapper">
                        <AddTransaction
                            transaction={editingTransaction}
                            onAddTransaction={addTransaction}
                            onUpdateTransaction={updateTransaction} 
                            onEditComplete={() => setEditingTransaction(null)}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsPage;