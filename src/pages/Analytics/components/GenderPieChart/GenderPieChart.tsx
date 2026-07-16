import { useEffect, useState } from "react";

import "./GenderPieChart.css";

import {

    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend

} from "recharts";

import { getAnalyticsData } from "../../api";

import type { GenderData } from "../../types";

const COLORS = [

    "#516A47",

    "#F4B860",

    "#5B8DEF"

];

const GenderPieChart = () => {

    const [data, setData] = useState<GenderData[]>([]);

    useEffect(() => {

        loadChart();

    }, []);

    const loadChart = async () => {

        const response = await getAnalyticsData();

        setData(response.genderData);

    };

    return (

        <div className="gender-chart">

            <h2>

                Games by Gender

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

                            data.map((_, index) => (

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};

export default GenderPieChart;