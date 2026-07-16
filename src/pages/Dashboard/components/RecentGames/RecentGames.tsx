import { useEffect, useState } from "react";

import "./RecentGames.css";

import { Gamepad2 } from "lucide-react";

import { getDashboardData } from "../../api";

import type { RecentGame } from "../../types";

const RecentGames = () => {

    const [games,setGames]=useState<RecentGame[]>([]);

    useEffect(()=>{

        loadGames();

    },[]);

    const loadGames=async()=>{

        const response=await getDashboardData();

        setGames(response.recentGames);

    };

    return(

        <div className="recent-games">

            <div className="recent-games-header">

                <h2>

                    Recent Games

                </h2>

            </div>

            <div className="recent-games-list">

                {

                    games.map((game)=>(

                        <div
                            key={game.id}
                            className="recent-game-item"
                        >

                            <div className="recent-game-left">

                                <div className="recent-game-icon">

                                    <Gamepad2 size={18}/>

                                </div>

                                <div>

                                    <h4>

                                        {game.gameName}

                                    </h4>

                                    <p>

                                        {game.playedBy}

                                    </p>

                                </div>

                            </div>

                            <div className="recent-game-right">

                                <span className="recent-game-time">

                                    {game.playTime}

                                </span>

                                <span
                                    className={`recent-game-status ${game.status === "Completed" ? "completed" : "progress"}`}
                                >

                                    {game.status}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default RecentGames;