const STORAGE_KEY = "transactions";

function TransactionService() {

    async function getTransactions() {
        let localData = localStorage.getItem(STORAGE_KEY);

        return localData
            ?
            JSON.parse(localData)
            : []
    }

    async function addTransaction(transaction) {
        let transactionData = await getTransactions();

        let newTransactionData = [...transactionData, transaction];

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTransactionData));

        return newTransactionData;
    }

    async function deleteTransaction(id) {
        let transactionData = await getTransactions();

        let newTransactionData = transactionData.filter((item) => item.id !== id);

        localStorage.setItem(STORAGE_KEY,JSON.stringify(newTransactionData));

        return newTransactionData;
    }

    async function clearTransactions() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        return [];
    }

    return {
        getTransactions,
        addTransaction,
        deleteTransaction,
        clearTransactions
    }

}


export default TransactionService;