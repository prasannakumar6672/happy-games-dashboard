import "./Analytics.css";

import AnalyticsHeader from "./components/AnalyticsHeader/AnalyticsHeader";
import DateFilter from "./components/DateFilter/DateFilter";
import GenderPieChart from "./components/GenderPieChart/GenderPieChart";
import GamesPieChart from "./components/GamesPieChart/GamesPieChart";
import RetentionChart from "./components/RetentionChart/RetentionChart";
import DailyStreak from "./components/DailyStreak/DailyStreak";

const Analytics = () => {

    return (

        <div className="analytics-page fade-in">

            {/* ==========================================
                Header
            ========================================== */}

            <AnalyticsHeader />

            {/* ==========================================
                Date Filter
            ========================================== */}

            <DateFilter />

            {/* ==========================================
                Pie Charts
            ========================================== */}

            <div className="analytics-chart-row">

                <GenderPieChart />

                <GamesPieChart />

            </div>

            {/* ==========================================
                Retention Chart
            ========================================== */}

            <RetentionChart />

            {/* ==========================================
                Daily Streak
            ========================================== */}

            <DailyStreak />

        </div>

    );

};

export default Analytics;