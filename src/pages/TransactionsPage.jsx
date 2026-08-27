import { useState } from "react";

import TransactionItem from "../components/TransactionItem";
import useTransactionContext from "../hooks/useTransactionContext";

function TransactionsPage() {

    const { deleteTransaction, transactions, loading,error } = useTransactionContext();

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");


    if (loading) {
        console.log(loading);
        return <p>Loading transactions...</p>;
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
                <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                >
                    Clear Search
                </button>
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
                                <p className="no-transactions">You don't have any transactions yet.</p>
                                :
                                filteredTransactions.length === 0
                                    ? <p className="no-transactions">No transactions found.</p>
                                    :
                                    filteredTransactions.map((item) => {
                                        return <TransactionItem onTransactionDelete={deleteTransaction} key={item.id} id={item.id} title={item.title} amount={item.amount} type={item.type} />
                                    })
                        }
                        <br />
                        <p>Showing {filteredTransactions.length} of {transactions.length} transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsPage;