import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import useTransactions from './hooks/useTransactions';




function App() {

  const {
  transactions,
  clearTransactions,
  addTransaction,
  deleteTransaction
} = useTransactions();

  return (
    <BrowserRouter>
      <div className="site-container">
        <Header />
        <div className="body-wrapper">
          <aside className="sidebar"><Sidebar /></aside>
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={<DashboardPage transactions={transactions} deleteTransaction={deleteTransaction}
                  clearTransactions={clearTransactions}
                  addTransaction={addTransaction}
                />}
              />
              <Route
                path="/transactions"
                element={<TransactionsPage transactions={transactions} deleteTransaction={deleteTransaction} />}
              />
              <Route
                path="/categories"
                element={<CategoriesPage />}
              />
              <Route
                path="/reports"
                element={<ReportsPage />}
              />
              <Route
                path="/settings"
                element={<SettingsPage />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;