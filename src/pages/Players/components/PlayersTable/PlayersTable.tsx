import { useEffect, useMemo, useState } from "react";

import "./PlayersTable.css";

import { getPlayersData } from "../../api";

import type { Player } from "../../types";

import StatusBadge from "../StatusBadge/StatusBadge";
import FriendsButton from "../FriendsButton/FriendsButton";
import ReferralButton from "../ReferralButton/ReferralButton";
import ActionButtons from "../ActionButtons/ActionButtons";

interface PlayersTableProps{

    search:string;

}

const PlayersTable=({

    search

}:PlayersTableProps)=>{

    const [players,setPlayers]=useState<Player[]>([]);

    useEffect(()=>{

        loadPlayers();

    },[]);

    const loadPlayers=async()=>{

        const response=await getPlayersData();

        setPlayers(response.players);

    };

    const filteredPlayers=useMemo(()=>{

        return players.filter((player)=>{

            const keyword=search.toLowerCase();

            return(

                player.playerName.toLowerCase().includes(keyword) ||

                player.username.toLowerCase().includes(keyword) ||

                player.referralCode.toLowerCase().includes(keyword)

            );

        });

    },[players,search]);

    const handleToggleStatus=(id:number)=>{

        setPlayers((prev)=>

            prev.map((player)=>

                player.id===id

                ?{

                    ...player,

                    status:

                    player.status==="Active"

                    ?"Blocked"

                    :"Active"

                }

                :player

            )

        );

    };

    const handleViewFriends=(player:Player)=>{

        alert(

            `${player.playerName} has ${player.friends} friends.`

        );

    };

    return(

        <div className="players-table">

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Player</th>

                        <th>Username</th>

                        <th>Gender</th>

                        <th>DOB</th>

                        <th>Country</th>

                        <th>Phone</th>

                        <th>Games</th>

                        <th>Earnings</th>

                        <th>Referral</th>

                        <th>Referred To</th>

                        <th>Referred By</th>

                        <th>Friends</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredPlayers.map((player)=>(

                            <tr key={player.id}>

                                <td>{player.id}</td>

                                <td>{player.playerName}</td>

                                <td>{player.username}</td>

                                <td>{player.gender}</td>

                                <td>{player.dob}</td>

                                <td>{player.country}</td>

                                <td>{player.phone}</td>

                                <td>{player.gamesPlayed}</td>

                                <td>

                                    ₹ {player.totalEarnings.toLocaleString()}

                                </td>

                                <td>{player.referralCode}</td>

                                <td>

                                    <ReferralButton

                                        count={player.referredToCount}

                                        earnings={player.referredToEarnings}

                                    />

                                </td>

                                <td>{player.referredBy}</td>

                                <td>

                                    <FriendsButton

                                        count={player.friends}

                                        onView={()=>

                                            handleViewFriends(player)

                                        }

                                    />

                                </td>

                                <td>

                                    <StatusBadge

                                        status={player.status}

                                    />

                                </td>

                                <td>

                                    <ActionButtons

                                        status={player.status}

                                        onToggle={()=>

                                            handleToggleStatus(player.id)

                                        }

                                    />

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default PlayersTable;