import type { DashboardResponse } from "./types";

// ==============================================
// Dummy Dashboard Data
// ==============================================

export const dashboardDummyData:DashboardResponse={

    stats:[

        {

            id:1,

            title:"Total Active Users",

            value:12875,

            icon:"users"

        },

        {

            id:2,

            title:"Total Active Games",

            value:16,

            icon:"games"

        },

        {

            id:3,

            title:"Users Count Today",

            value:423,

            icon:"todayUsers"

        },

        {

            id:4,

            title:"Games Played Today",

            value:15489,

            icon:"controller"

        },

        {

            id:5,

            title:"Ads Watched Today",

            value:22841,

            icon:"ads"

        },

        {

            id:6,

            title:"Most Played User Today",

            value:"Prasanna007",

            icon:"winner"

        },

        {

            id:7,

            title:"Most Played Game Today",

            value:"Rock Paper Scissors",

            icon:"game"

        },

        {

            id:8,

            title:"Avg Games Per User",

            value:"8.2",

            icon:"chart"

        }

    ],

    topPlayers:[

{

id:1,

playerName:"Prasanna Kumar",

username:"Prasanna007",

gamesPlayed:342,

earnings:25000

},

{

id:2,

playerName:"Rohit Sharma",

username:"Rohit",

gamesPlayed:301,

earnings:20000

},

{

id:3,

playerName:"Arjun Reddy",

username:"Arjun",

gamesPlayed:287,

earnings:18500

}

],
recentGames:[

    {

        id:1,

        gameName:"Rock Paper Scissors",

        playedBy:"Prasanna007",

        playTime:"2 mins ago",

        status:"Completed"

    },

    {

        id:2,

        gameName:"Sudoku",

        playedBy:"Rahul123",

        playTime:"5 mins ago",

        status:"Completed"

    },

    {

        id:3,

        gameName:"Guess Number",

        playedBy:"Anjali",

        playTime:"8 mins ago",

        status:"In Progress"

    },

    {

        id:4,

        gameName:"Bulls & Cows",

        playedBy:"Kiran",

        playTime:"12 mins ago",

        status:"Completed"

    }

],
dailyActivities:[

    {

        id:1,

        title:"New User Joined",

        description:"Rahul123 registered successfully",

        time:"2 mins ago",

        type:"user"

    },

    {

        id:2,

        title:"Game Completed",

        description:"Rock Paper Scissors finished",

        time:"8 mins ago",

        type:"game"

    },

    {

        id:3,

        title:"Reward Won",

        description:"₹500 credited to Prasanna007",

        time:"20 mins ago",

        type:"reward"

    },

    {

        id:4,

        title:"Withdrawal Requested",

        description:"₹1000 withdrawal request",

        time:"35 mins ago",

        type:"withdrawal"

    },

    {

        id:5,

        title:"Ads Milestone",

        description:"1500 ads watched today",

        time:"1 hour ago",

        type:"ads"

    }

]

};