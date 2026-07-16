import "./Withdrawals.css";

import WithdrawalHeader from "./components/WithdrawalHeader/WithdrawalHeader";
import RequestTable from "./components/RequestTable/RequestTable";
import HistoryTable from "./components/HistoryTable/HistoryTable";

const Withdrawals = () => {

    return (

        <div className="withdrawals-page fade-in">

            {/* ==========================================
                Header
            ========================================== */}

            <WithdrawalHeader />

            {/* ==========================================
                Pending Requests
            ========================================== */}

            <RequestTable />

            {/* ==========================================
                Withdrawal History
            ========================================== */}

            <HistoryTable />

        </div>

    );

};

export default Withdrawals;