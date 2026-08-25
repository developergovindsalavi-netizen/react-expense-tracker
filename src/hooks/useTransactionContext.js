import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function useTransactionContext() {

    const {
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    } = useContext(TransactionContext);

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    };
}

export default useTransactionContext;