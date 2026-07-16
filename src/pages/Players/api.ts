import { playersDummyData } from "./dummyData";

import type { PlayersResponse } from "./types";

// ======================================================
// Dummy API
// ======================================================

export const getPlayersData = async (): Promise<PlayersResponse> => {

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(playersDummyData);

        },500);

    });

};

/* ======================================================

Backend API

Uncomment after backend integration

--------------------------------------------------------

import axios from "axios";

export const getPlayersData = async () => {

    const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/players`

    );

    return response.data;

};

====================================================== */