import useTransactionContext from "../hooks/useTransactionContext";
import Summary from "../components/Summary";
import EmptyState from "../components/EmptyState";
import Loading from "../components/Loading";
import CategoryReport from "../components/CategoryReport";
import MonthlyReport from "../components/MonthlyReport";
import { useState } from "react";
import ExpenseCategoryChart from "../components/ExpenseCategoryChart";
import MonthlyIncomeExpenseChart from "../components/MonthlyIncomeExpenseChart";

function ReportsPage() {
    const { transactions, loading, error } = useTransactionContext();

    const [selectedMonth, setSelectedMonth] = useState("");

    const monthlyTransactions = selectedMonth
        ? transactions.filter(item => item.date.startsWith(selectedMonth))
        : [];

    const monthlyIncome = monthlyTransactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + item.amount, 0);

    const monthlyExpenses = monthlyTransactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + item.amount, 0);

    const monthlyBalance = monthlyIncome - monthlyExpenses;

    const totalExpenses = transactions
        .filter((item) => item.type === "expense")
        .reduce((acc, item) => acc + item.amount, 0);

    const totalIncome = transactions
        .filter((item) => item.type === "income")
        .reduce((acc, item) => acc + item.amount, 0);

    const balance = totalIncome - totalExpenses;

    const summaryData = [
        {
            id: 1,
            title: "Income",
            amount: totalIncome
        },
        {
            id: 2,
            title: "Expense",
            amount: totalExpenses
        },
        {
            id: 3,
            title: "Balance",
            amount: balance
        }
    ];


    const totalsByCategory = transactions
        .filter(item => item.type === "expense")
        .reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = 0;
            }
            acc[item.category] += item.amount;
            return acc;
        }, {});

    if (loading) {
        return <Loading message="Loading Reports..." />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h3>Reports</h3>
            {
                transactions.length === 0
                    ?
                    <EmptyState message="You don't have any transactions yet." />
                    :
                    <>
                        <Summary summaryData={summaryData} />
                        <CategoryReport totalsByCategory={totalsByCategory} />
                        <br />
                        <MonthlyReport
                            selectedMonth={selectedMonth}
                            onMonthChange={setSelectedMonth}
                            monthlyTransactions={monthlyTransactions}
                            monthlyIncome={monthlyIncome}
                            monthlyExpenses={monthlyExpenses}
                            monthlyBalance={monthlyBalance}
                        />
                        <ExpenseCategoryChart totalsByCategory={totalsByCategory} />
                        <MonthlyIncomeExpenseChart transactions={transactions} />
                    </>
            }
        </div>
    );
}

export default ReportsPage;