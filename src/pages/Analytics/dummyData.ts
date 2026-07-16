import type { AnalyticsResponse } from "./types";

export const analyticsDummyData: AnalyticsResponse = {

    genderData: [

        {
            name: "Male",
            value: 68
        },

        {
            name: "Female",
            value: 28
        },

        {
            name: "Others",
            value: 4
        }

    ],

    gamesPlayedData: [

        {
            name: "Rock Paper Scissors",
            value: 40
        },

        {
            name: "Sudoku",
            value: 30
        },

        {
            name: "Guess Number",
            value: 18
        },

        {
            name: "Bulls & Cows",
            value: 12
        }

    ],

    retentionData: [

        {
            plays: "1",
            users: 520
        },

        {
            plays: "2",
            users: 410
        },

        {
            plays: "3",
            users: 330
        },

        {
            plays: "4",
            users: 250
        },

        {
            plays: "5",
            users: 180
        },

        {
            plays: "6",
            users: 120
        },

        {
            plays: "7+",
            users: 95
        }

    ],

    dailyStreakData: [

        {
            day: "Mon",
            streak: 420
        },

        {
            day: "Tue",
            streak: 510
        },

        {
            day: "Wed",
            streak: 630
        },

        {
            day: "Thu",
            streak: 590
        },

        {
            day: "Fri",
            streak: 720
        },

        {
            day: "Sat",
            streak: 810
        },

        {
            day: "Sun",
            streak: 940
        }

    ]

};