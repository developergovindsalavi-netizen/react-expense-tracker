import { useEffect, useState } from "react";
import TransactionService from "../services/TransactionService";

function useTransactions() {

    const {
        getTransactions: getTransactionsApi,
        addTransaction: addTransactionApi,
        deleteTransaction: deleteTransactionApi,
        clearTransactions: clearTransactionsApi
    } = TransactionService();

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {


        async function loadTransactions() {

            try {
                const data = await getTransactionsApi();

                setTransactions(data);
            }
            catch (error) {
                console.error("Failed to load transactions:", error);
                setError("Unable to load transactions.");
            }
            finally {
                setLoading(false);
            }
        }

        loadTransactions();

    }, []);

    async function clearTransactions() {

        try {
            setLoading(true);
            const data = await clearTransactionsApi();
            setTransactions(data);
        }
        catch (error) {
            console.error("Failed to clear transactions", error);
            setError("Unable to clear transactions.");
        }
        finally {
            setLoading(false);
        }
    }

    async function addTransaction(item) {

        try {
            setLoading(true);
            const data = await addTransactionApi(item);
            setTransactions(data);
        }
        catch (error) {
            console.error("Failed to add transaction", error);
            setError("Unable to add transaction");
        }
        finally {
            setLoading(false);
        }
    }

    async function deleteTransaction(id) {
        try {
            setLoading(true);
            const data = await deleteTransactionApi(id);
            setTransactions(data);
        }
        catch (error) {
            console.error("Failed to delete transaction", error);
            setError("Unable to delete transaction");
        }
        finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    };

}

export default useTransactions;