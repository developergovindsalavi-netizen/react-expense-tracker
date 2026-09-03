
import SummaryCard from "./SummaryCard";

function Summary({ summaryData }) {

    return <>
        <div className="card-container">
            {
                summaryData.map((item) => {
                    return <SummaryCard
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                    />
                })
            }
        </div>
    </>
}

export default Summary; 