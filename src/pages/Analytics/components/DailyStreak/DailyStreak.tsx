import { useEffect, useState } from "react";

import "./DailyStreak.css";

import {

    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip

} from "recharts";

import { getAnalyticsData } from "../../api";

import type { DailyStreakData } from "../../types";

const DailyStreak = () => {

    const [data, setData] = useState<DailyStreakData[]>([]);

    useEffect(() => {

        loadChart();

    }, []);

    const loadChart = async () => {

        const response = await getAnalyticsData();

        setData(response.dailyStreakData);

    };

    return (

        <div className="daily-streak">

            <h2>

                Average Daily Streak

            </h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="day"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line

                        type="monotone"

                        dataKey="streak"

                        stroke="#516A47"

                        strokeWidth={3}

                        dot={{

                            r:5,

                            fill:"#516A47"

                        }}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

};

export default DailyStreak;