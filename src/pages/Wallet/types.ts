// ======================================================
// Wallet Stat
// ======================================================

export interface WalletStat {

    id:number;

    title:string;

    amount:number;

    icon:string;

}

// ======================================================
// Recent Transactions
// ======================================================

export interface RecentTransaction {

    id:number;

    transactionId:string;

    user:string;

    type:string;

    amount:number;

    status:"Completed"|"Pending"|"Failed";

    date:string;

}

// ======================================================
// Wallet Response
// ======================================================

export interface WalletResponse{

    stats:WalletStat[];

    recentTransactions:RecentTransaction[];

}