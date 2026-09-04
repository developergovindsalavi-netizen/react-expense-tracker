import EmptyState from "./EmptyState"

function MonthlyReport(
    {selectedMonth,
    onMonthChange,
    monthlyTransactions,
    monthlyIncome,
    monthlyExpenses,
    monthlyBalance
}) {

    return <>
        <input
            type="month"
            value={selectedMonth}
            onChange={(e) => onMonthChange(e.target.value)}
        />
        {
            !selectedMonth ? (
                <p>Select a month to view the report.</p>
            ) : monthlyTransactions.length === 0 ? (
                <EmptyState message="No transactions found for this month." />
            ) : (
                <div>
                    <h3>Monthly Report</h3>

                    <p>Income: ₹{monthlyIncome}</p>
                    <p>Expenses: ₹{monthlyExpenses}</p>
                    <p>Balance: ₹{monthlyBalance}</p>
                </div>
            )}
    </>
}

export default MonthlyReport;