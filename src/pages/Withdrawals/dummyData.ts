import type { WithdrawalResponse } from "./types";

export const withdrawalDummyData:WithdrawalResponse={

    requests:[

        {

            id:101,

            username:"Prasanna007",

            amount:1500,

            balance:5400,

            requestDate:"16 Jul 2026 09:15 AM",

            status:"Pending"

        },

        {

            id:102,

            username:"Rahul123",

            amount:800,

            balance:3200,

            requestDate:"16 Jul 2026 10:45 AM",

            status:"Pending"

        },

        {

            id:103,

            username:"Sneha22",

            amount:2500,

            balance:7200,

            requestDate:"16 Jul 2026 11:30 AM",

            status:"Pending"

        },

        {

            id:104,

            username:"Kiran777",

            amount:1200,

            balance:4100,

            requestDate:"16 Jul 2026 12:20 PM",

            status:"Pending"

        }

    ],

    history:[

        {

            id:91,

            username:"Arjun",

            amount:1800,

            status:"Completed",

            processedDate:"15 Jul 2026"

        },

        {

            id:92,

            username:"Rohit",

            amount:950,

            status:"Rejected",

            processedDate:"15 Jul 2026"

        },

        {

            id:93,

            username:"Anjali",

            amount:2200,

            status:"Completed",

            processedDate:"14 Jul 2026"

        },

        {

            id:94,

            username:"Vikram",

            amount:1300,

            status:"Completed",

            processedDate:"14 Jul 2026"

        }

    ]

};