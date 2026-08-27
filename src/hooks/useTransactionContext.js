import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function useTransactionContext() {

    const {
        loading,
        error,
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    } = useContext(TransactionContext);

    return {
        loading,
        error,
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    };
}

export default useTransactionContext;