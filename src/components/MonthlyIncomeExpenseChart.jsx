import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function MonthlyIncomeExpenseChart({ transactions }) {

    const monthlyData = Object.values(
        transactions.reduce((acc, item) => {
            const month = item.date.substring(0, 7);

            if (!acc[month]) {
                acc[month] = { month: month, income: 0, expense: 0 };
            }

            if (item.type === "income" || item.type === "expense") {
                acc[month][item.type] += item.amount;
            }

            return acc;
        }, {})
    ).sort((a, b) => a.month.localeCompare(b.month));

    return (
        <div>
            <h3>Monthly Income vs Expense</h3>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#82ca9d" />
                    <Bar dataKey="expense" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}

export default MonthlyIncomeExpenseChart;