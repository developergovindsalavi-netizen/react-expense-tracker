import EmptyState from "./EmptyState";

function CategoryReport({ totalsByCategory }) {

    const categoryData = Object.entries(totalsByCategory);

    return <div>
        <h3>Expense by Category</h3>
        {
            categoryData.length === 0
                ?
                <EmptyState message="No category wise data found" />
                :
                <table>
                    <thead>
                        <tr>
                            <th>Category</th><th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoryData.map(([category, amount]) => {
                                return <tr key={category}>
                                    <td>{category}</td>
                                    <td>₹ {amount}</td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
        }
    </div>

}

export default CategoryReport;