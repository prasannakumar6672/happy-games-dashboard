import "./Wallet.css";

import WalletHeader from "./components/WalletHeader/WalletHeader";
import WalletStats from "./components/WalletStats/WalletStats";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";

const Wallet = () => {

    return (

        <div className="wallet-page fade-in">

            {/* ==========================================
                Header
            ========================================== */}

            <WalletHeader />

            {/* ==========================================
                Revenue Cards
            ========================================== */}

            <WalletStats />

            {/* ==========================================
                Transactions
            ========================================== */}

            <RecentTransactions />

        </div>

    );

};

export default Wallet;