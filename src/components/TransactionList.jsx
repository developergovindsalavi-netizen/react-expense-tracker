
import TransactionItem from "./TransactionItem";

function TransactionList({transactions,onTransactionDelete}){

    return <>
     <div className="transaction-list">
                    <h3>Recent Transactions</h3>
                    {
                        transactions.map((item) => {
                            return <TransactionItem 
                            onTransactionDelete={onTransactionDelete} 
                            key={item.id} 
                            id={item.id} 
                            title={item.title} 
                            amount={item.amount} 
                            type={item.type} />
                        })
                    }
                </div>
    </>
}

export default TransactionList;