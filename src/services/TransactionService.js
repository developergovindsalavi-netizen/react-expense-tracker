const STORAGE_KEY = "transactions";


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

    async function updateTransaction(transaction) {
        let transactionData = await getTransactions();

        let transToUpdate = transactionData.find((item) => item.id === transaction.id);

        if(transToUpdate){
            transToUpdate.title=transaction.title;
            transToUpdate.amount=transaction.amount;
            transToUpdate.type=transaction.type;
            transToUpdate.date=transaction.date;
            transToUpdate.category=transaction.category;
        }

        localStorage.setItem(STORAGE_KEY,JSON.stringify(transactionData));

        return transactionData;
    }

    async function clearTransactions() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        return [];
    }

const TransactionService = {
    getTransactions,
    addTransaction,
    deleteTransaction,
    clearTransactions,
    updateTransaction
};


export default TransactionService;