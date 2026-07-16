import { useEffect, useState } from "react";

import "./DashboardStats.css";

import { getDashboardData } from "../../api";

import type { DashboardStat } from "../../types";

import StatCard from "../StatCard/StatCard";

const DashboardStats = () => {

    const [stats,setStats]=useState<DashboardStat[]>([]);

    useEffect(()=>{

        loadDashboard();

    },[]);

    const loadDashboard=async()=>{

        const response=await getDashboardData();

        setStats(response.stats);

    };

    return(

        <div className="dashboard-stats">

            {

                stats.map((item)=>(

                    <StatCard

                        key={item.id}

                        data={item}

                    />

                ))

            }

        </div>

    );

};

export default DashboardStats;