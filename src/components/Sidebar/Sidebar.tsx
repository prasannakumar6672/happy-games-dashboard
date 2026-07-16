import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    BarChart3,
    Wallet,
    ArrowDownToLine,
    Users,
    Gamepad2,
    Trophy,
    Settings,
    LogOut
} from "lucide-react";

const Sidebar = () => {

    // ==========================================
    // Logout
    // ==========================================

    const handleLogout = () => {

        localStorage.clear();

        // Later Backend

        // navigate("/login");

        console.log("Logout");

    };

    return (

        <aside className="sidebar">

            {/* Logo */}

            <div className="sidebar-logo">

                <h1>Happi Games</h1>

                <span>Master Dashboard</span>

            </div>

            {/* Scrollable Menu */}

            <div className="sidebar-scroll">

                <nav className="sidebar-menu">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <LayoutDashboard size={20} />

                        <span>Dashboard</span>

                    </NavLink>

                    <NavLink
                        to="/analytics"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <BarChart3 size={20} />

                        <span>Analytics</span>

                    </NavLink>

                    <NavLink
                        to="/wallet"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <Wallet size={20} />

                        <span>Wallet</span>

                    </NavLink>

                    <NavLink
                        to="/withdrawals"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <ArrowDownToLine size={20} />

                        <span>Withdrawals</span>

                    </NavLink>

                    <NavLink
                        to="/players"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <Users size={20} />

                        <span>Players</span>

                    </NavLink>

                    {/* <NavLink
                        to="/games"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <Gamepad2 size={20} />

                        <span>Games</span>

                    </NavLink>

                    <NavLink
                        to="/rewards"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <Trophy size={20} />

                        <span>Rewards</span>

                    </NavLink> */}

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >

                        <Settings size={20} />

                        <span>Settings</span>

                    </NavLink>

                </nav>

            </div>

            {/* Logout */}

            <button
                className="logout-btn"
                onClick={handleLogout}
            >

                <LogOut size={20} />

                Logout

            </button>

        </aside>

    );

};

export default Sidebar;