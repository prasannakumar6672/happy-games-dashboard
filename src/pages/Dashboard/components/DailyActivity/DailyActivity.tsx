import "./DailyActivity.css";

import { useEffect, useState } from "react";

import {

    User,

    Gamepad2,

    Gift,

    Wallet,

    MonitorPlay

} from "lucide-react";

import { getDashboardData } from "../../api";

import type { DailyActivity as Activity } from "../../types";

const DailyActivity = () => {

    const [activities,setActivities]=useState<Activity[]>([]);

    useEffect(()=>{

        loadActivity();

    },[]);

    const loadActivity=async()=>{

        const response=await getDashboardData();

        setActivities(response.dailyActivities);

    };

    const getIcon=(type:string)=>{

        switch(type){

            case "user":

                return <User size={18}/>;

            case "game":

                return <Gamepad2 size={18}/>;

            case "reward":

                return <Gift size={18}/>;

            case "withdrawal":

                return <Wallet size={18}/>;

            case "ads":

                return <MonitorPlay size={18}/>;

            default:

                return <User size={18}/>;

        }

    };

    return(

        <div className="daily-activity">

            <h2>

                Daily Activity

            </h2>

            <div className="activity-list">

                {

                    activities.map((activity)=>(

                        <div
                            key={activity.id}
                            className="activity-item"
                        >

                            <div className="activity-icon">

                                {getIcon(activity.type)}

                            </div>

                            <div className="activity-content">

                                <h4>

                                    {activity.title}

                                </h4>

                                <p>

                                    {activity.description}

                                </p>

                            </div>

                            <span className="activity-time">

                                {activity.time}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default DailyActivity;