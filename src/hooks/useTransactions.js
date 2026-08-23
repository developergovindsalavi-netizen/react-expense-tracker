import { useEffect, useState } from "react";

function useTransactions() {

    const [transactions, setTransactions] = useState(() => {
        let localData = localStorage.getItem("transactions");

        return localData
            ?
            JSON.parse(localData)
            : []
    });


    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    function clearTransactions() {
        setTransactions([]);
    }


    function addTransaction(item) {
        setTransactions((previousTransactions) => [
            ...previousTransactions,
            item
        ]);
    }

    function deleteTransaction(id) {
        setTransactions((previousTransactions) =>
            previousTransactions.filter((item) => item.id !== id)
        );
    }

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    };

}

export default useTransactions;