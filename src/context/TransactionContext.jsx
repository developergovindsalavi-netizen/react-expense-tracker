import { createContext } from "react";
import useTransactions from "../hooks/useTransactions";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {

    const {
        loading,
        transactions,
        clearTransactions,
        addTransaction,
        deleteTransaction
    } = useTransactions();

    return (
        <TransactionContext.Provider
            value={{
                loading,
                transactions,
                clearTransactions,
                addTransaction,
                deleteTransaction
            }}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionContext;