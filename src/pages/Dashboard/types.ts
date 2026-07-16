// ======================================================
// Dashboard Types
// ======================================================

export interface DashboardStat {

    id: number;

    title: string;

    value: number | string;

    icon: string;

}

// ======================================================
// Recent Games
// ======================================================

export interface RecentGame {

    id: number;

    gameName: string;

    playedBy: string;

    playTime: string;

    status: "Completed" | "In Progress";

}

// ======================================================
// Daily Activity
// ======================================================

export interface DailyActivity {

    id: number;

    title: string;

    description: string;

    time: string;

    type:
        | "user"
        | "game"
        | "reward"
        | "withdrawal"
        | "ads";

}

// ======================================================
// Top Players
// ======================================================

export interface TopPlayer {

    id: number;

    playerName: string;

    username: string;

    gamesPlayed: number;

    earnings: number;

}

// ======================================================
// Dashboard Response
// ======================================================

export interface DashboardResponse {

    stats: DashboardStat[];

    recentGames: RecentGame[];

    dailyActivities: DailyActivity[];

    topPlayers: TopPlayer[];

}