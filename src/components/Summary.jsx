
import SummaryCard from "./SummaryCard";

function Summary({totalIncome,totalExpenses,balance}){
    return <>
    <div className="card-container">
                <SummaryCard title="Income" amount={totalIncome} />
                <SummaryCard title="Expense" amount={totalExpenses} />
                <SummaryCard title="Balance" amount={balance} />
            </div>
    </>
}

export default Summary; 