import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from "recharts";

function ExpenseCategoryChart({ totalsByCategory }) {

    const categoryData = Object.entries(totalsByCategory).map(([name, value]) => ({
        name,
        value
    }));

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

    return (
        <div>
            <h3>Expense by Category</h3>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={categoryData}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} :  ${(percent * 100).toFixed(0)}%`}
                    >
                        {categoryData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ExpenseCategoryChart;