import { useEffect, useState } from "react";

import "./GamesPieChart.css";

import {

    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend

} from "recharts";

import { getAnalyticsData } from "../../api";

import type { GamesPlayedData } from "../../types";

const COLORS = [

    "#516A47",

    "#F4B860",

    "#5B8DEF",

    "#EF6B6B"

];

const GamesPieChart = () => {

    const [data,setData]=useState<GamesPlayedData[]>([]);

    useEffect(()=>{

        loadChart();

    },[]);

    const loadChart=async()=>{

        const response=await getAnalyticsData();

        setData(response.gamesPlayedData);

    };

    return(

        <div className="games-chart">

            <h2>

                Games Played

            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={110}

                        label

                    >

                        {

                            data.map((_,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                    <Legend/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};

export default GamesPieChart;