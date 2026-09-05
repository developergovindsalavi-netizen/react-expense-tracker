import { NavLink } from "react-router-dom";

function Sidebar({onNavigate}) {
    return (
        <ul>
            <li>
                <NavLink
                    to="/"
                    onClick={onNavigate}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/transactions"
                    onClick={onNavigate}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Transactions
                </NavLink>
            </li>
           <li>
                <NavLink
                    to="/reports"
                    onClick={onNavigate}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Reports
                </NavLink>
            </li>
        </ul>


    );
}

export default Sidebar;