import { withdrawalDummyData } from "./dummyData";

import type { WithdrawalResponse } from "./types";

// ======================================================
// Dummy API
// ======================================================

export const getWithdrawalsData = async (): Promise<WithdrawalResponse> => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(withdrawalDummyData);

        },500);

    });

};

/* ======================================================

Backend API

Uncomment after backend integration

--------------------------------------------------------

import axios from "axios";

export const getWithdrawalsData = async () => {

    const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/withdrawals`

    );

    return response.data;

};

====================================================== */