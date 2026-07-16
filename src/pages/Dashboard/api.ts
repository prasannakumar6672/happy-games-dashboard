import type { DashboardResponse } from "./types";

import { dashboardDummyData } from "./dummyData";

// ======================================================
// Dummy API
// ======================================================

export const getDashboardData = async (): Promise<DashboardResponse> => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(dashboardDummyData);

        }, 500);

    });

};

/* ======================================================

Backend API

Uncomment after backend integration

--------------------------------------------------------

import axios from "axios";

export const getDashboardData = async () => {

    const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/dashboard`

    );

    return response.data;

};

====================================================== */