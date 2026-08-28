import Card from "./Card";

function SummaryCard({ title, amount }) {
    return (
         <Card title={title}>
            <p className="amount">{amount}</p>
        </Card>
    );
}

export default SummaryCard;