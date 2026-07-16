// ======================================================
// Withdrawal Request
// ======================================================

export interface WithdrawalRequest {

    id:number;

    username:string;

    amount:number;

    balance:number;

    requestDate:string;

    status:"Pending";

}

// ======================================================
// Withdrawal History
// ======================================================

export interface WithdrawalHistory {

    id:number;

    username:string;

    amount:number;

    status:"Completed"|"Rejected";

    processedDate:string;

}

// ======================================================
// API Response
// ======================================================

export interface WithdrawalResponse{

    requests:WithdrawalRequest[];

    history:WithdrawalHistory[];

}