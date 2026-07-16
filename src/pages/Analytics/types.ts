// ======================================================
// Games by Gender
// ======================================================

export interface GenderData {

    name: string;

    value: number;

}

// ======================================================
// Games Played Distribution
// ======================================================

export interface GamesPlayedData {

    name: string;

    value: number;

}

// ======================================================
// Retention Data
// ======================================================

export interface RetentionData {

    plays: string;

    users: number;

}

// ======================================================
// Daily Streak
// ======================================================

export interface DailyStreakData {

    day: string;

    streak: number;

}

// ======================================================
// Analytics Response
// ======================================================

export interface AnalyticsResponse {

    genderData: GenderData[];

    gamesPlayedData: GamesPlayedData[];

    retentionData: RetentionData[];

    dailyStreakData: DailyStreakData[];

}