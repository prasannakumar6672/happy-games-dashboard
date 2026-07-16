import "./Header.css";

import {
    Search,
    Bell,
    UserCircle2
} from "lucide-react";

const Header = () => {

    return (

        <header className="header">

            <div className="header-left">

                <h2>

                    Dashboard

                </h2>

                <p>

                    Welcome back, Admin 👋

                </p>

            </div>

            <div className="header-right">

                <div className="header-search">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search players, games..."
                    />

                </div>

                <button className="header-btn">

                    <Bell size={20} />

                    <span className="notification-dot"></span>

                </button>

                <div className="header-profile">

                    <UserCircle2 size={42} />

                    <div>

                        <h4>

                            Admin

                        </h4>

                        <p>

                            Super Admin

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

};

export default Header;