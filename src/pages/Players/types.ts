// ======================================================
// Player
// ======================================================

export interface Player {

    id:number;

    playerName:string;

    username:string;

    gender:"Male"|"Female"|"Other";

    dob:string;

    country:string;

    phone:string;

    gamesPlayed:number;

    totalEarnings:number;

    referralCode:string;

    referredToCount:number;

    referredToEarnings:number;

    referredBy:string;

    friends:number;

    status:"Active"|"Blocked";

}

// ======================================================
// Players Response
// ======================================================

export interface PlayersResponse{

    players:Player[];

}