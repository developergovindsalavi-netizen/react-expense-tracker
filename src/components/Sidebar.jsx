import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <ul>
            <li>
                <NavLink
                    to="/"
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
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Transactions
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Categories
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Reports
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Settings
                </NavLink>
            </li>

        </ul>


    );
}

export default Sidebar;