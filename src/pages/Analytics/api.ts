import type { AnalyticsResponse } from "./types";

import { analyticsDummyData } from "./dummyData";

// ======================================================
// Dummy API
// ======================================================

export const getAnalyticsData = async (): Promise<AnalyticsResponse> => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(analyticsDummyData);

        }, 500);

    });

};

/* ======================================================

Backend API

Uncomment when backend is ready

--------------------------------------------------------

import axios from "axios";

export const getAnalyticsData = async () => {

    const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/analytics`

    );

    return response.data;

};

====================================================== */