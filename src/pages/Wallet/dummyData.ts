import type { WalletResponse } from "./types";

export const walletDummyData:WalletResponse={

    stats:[

        {

            id:1,

            title:"Ad Revenue",

            amount:542000,

            icon:"ads"

        },

        {

            id:2,

            title:"Platform Revenue",

            amount:315000,

            icon:"platform"

        },

        {

            id:3,

            title:"Players Revenue",

            amount:865000,

            icon:"players"

        },

        {

            id:4,

            title:"Award Winners Revenue",

            amount:158000,

            icon:"reward"

        }

    ],

    recentTransactions:[

        {

            id:1,

            transactionId:"TXN1001",

            user:"Prasanna007",

            type:"Reward",

            amount:500,

            status:"Completed",

            date:"15 Jul 2026"

        },

        {

            id:2,

            transactionId:"TXN1002",

            user:"Rahul123",

            type:"Withdrawal",

            amount:1200,

            status:"Pending",

            date:"15 Jul 2026"

        },

        {

            id:3,

            transactionId:"TXN1003",

            user:"Sneha22",

            type:"Reward",

            amount:800,

            status:"Completed",

            date:"14 Jul 2026"

        },

        {

            id:4,

            transactionId:"TXN1004",

            user:"Kiran777",

            type:"Withdrawal",

            amount:2500,

            status:"Failed",

            date:"14 Jul 2026"

        }

    ]

};