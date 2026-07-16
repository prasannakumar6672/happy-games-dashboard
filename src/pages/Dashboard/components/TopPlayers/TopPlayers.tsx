import { useEffect, useState } from "react";

import "./TopPlayers.css";

import { Trophy } from "lucide-react";

import { getDashboardData } from "../../api";

import type { TopPlayer } from "../../types";

const TopPlayers = () => {

    const [players,setPlayers]=useState<TopPlayer[]>([]);

    useEffect(()=>{

        loadPlayers();

    },[]);

    const loadPlayers=async()=>{

        const response=await getDashboardData();

        setPlayers(response.topPlayers);

    };

    return(

        <div className="top-players">

            <div className="top-players-header">

                <h2>

                    Top Players

                </h2>

            </div>

            <div className="top-players-list">

                {

                    players.map((player,index)=>(

                        <div
                            key={player.id}
                            className="player-card"
                        >

                            <div className="player-rank">

                                {index+1}

                            </div>

                            <div className="player-details">

                                <h4>

                                    {player.playerName}

                                </h4>

                                <span>

                                    {player.username}

                                </span>

                            </div>

                            <div className="player-stats">

                                <p>

                                    {player.gamesPlayed} Games

                                </p>

                                <strong>

                                    ₹{player.earnings.toLocaleString()}

                                </strong>

                            </div>

                            <Trophy
                                size={20}
                                color="#F59E0B"
                            />

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default TopPlayers;