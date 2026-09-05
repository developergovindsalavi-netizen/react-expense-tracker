import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="site-container">
        <Header menuOpen={menuOpen}
          onMenuClick={() => setMenuOpen(prev => !prev)} />
        <div className="body-wrapper">
          <aside className={`sidebar ${menuOpen ? "open" : ""}`}><Sidebar onNavigate={() => setMenuOpen(false)} /></aside>
          {menuOpen && (
            <div
              className="mobile-backdrop"
              onClick={() => setMenuOpen(false)}
            />
          )}
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={<DashboardPage />}
              />
              <Route
                path="/transactions"
                element={<TransactionsPage />}
              />
              <Route
                path="/reports"
                element={<ReportsPage />}
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