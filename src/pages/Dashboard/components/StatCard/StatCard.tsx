import "./StatCard.css";

import {

    Users,

    Gamepad2,

    Trophy,

    MonitorPlay,

    PlayCircle,

    BarChart3

} from "lucide-react";

import type { DashboardStat } from "../../types";

interface Props{

    data:DashboardStat;

}

const StatCard=({data}:Props)=>{

    const getIcon=()=>{

        switch(data.icon){

            case "users":

                return <Users size={26}/>;

            case "games":

                return <Gamepad2 size={26}/>;

            case "todayUsers":

                return <Users size={26}/>;

            case "controller":

                return <PlayCircle size={26}/>;

            case "ads":

                return <MonitorPlay size={26}/>;

            case "winner":

                return <Trophy size={26}/>;

            case "game":

                return <Gamepad2 size={26}/>;

            case "chart":

                return <BarChart3 size={26}/>;

            default:

                return <Users size={26}/>;

        }

    };

    return(

        <div className="stat-card">

            <div className="stat-icon">

                {getIcon()}

            </div>

            <h3>

                {data.value}

            </h3>

            <p>

                {data.title}

            </p>

        </div>

    );

};

export default StatCard;