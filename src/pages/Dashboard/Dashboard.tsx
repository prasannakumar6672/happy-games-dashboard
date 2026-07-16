import "./Dashboard.css";

import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashboardStats from "./components/DashboardStats/DashboardStats";

const Dashboard = () => {

    return (

        <div className="dashboard-page fade-in">

            {/* ==========================
                Dashboard Header
            ========================== */}

            <DashboardHeader />

            {/* ==========================
                Dashboard Statistics
            ========================== */}

            <DashboardStats />

        </div>

    );

};

export default Dashboard;