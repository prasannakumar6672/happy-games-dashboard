import { useEffect, useState } from "react";

import "./RetentionChart.css";

import {

    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis

} from "recharts";

import { getAnalyticsData } from "../../api";

import type { RetentionData } from "../../types";

const RetentionChart = () => {

    const [data, setData] = useState<RetentionData[]>([]);

    useEffect(() => {

        loadChart();

    }, []);

    const loadChart = async () => {

        const response = await getAnalyticsData();

        setData(response.retentionData);

    };

    return (

        <div className="retention-chart">

            <h2>

                Users vs Number of Times Played

            </h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="plays"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="users"
                        fill="#516A47"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

};

export default RetentionChart;