import { walletDummyData } from "./dummyData";

import type { WalletResponse } from "./types";

// ======================================================
// Dummy API
// ======================================================

export const getWalletData=async():

Promise<WalletResponse>=>{

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(walletDummyData);

        },500);

    });

};

/* ======================================================

Backend API

Uncomment after backend integration

--------------------------------------------------------

import axios from "axios";

export const getWalletData=async()=>{

    const response=await axios.get(

        `${import.meta.env.VITE_API_URL}/wallet`

    );

    return response.data;

};

====================================================== */