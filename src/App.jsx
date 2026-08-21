import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="site-container">
      <Header/>
      <div className="body-wrapper">
        <aside className="sidebar"><Sidebar /></aside>
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}


export default App;