import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function useTransactionContext() {

    const {
        loading,
        error,
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions,
        updateTransaction
    } = useContext(TransactionContext);

    return {
        loading,
        error,
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions,
        updateTransaction
    };
}

export default useTransactionContext;