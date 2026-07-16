import { useEffect, useState } from "react";

import "./WalletStats.css";

import {

    getWalletData

} from "../../api";

import type {

    WalletStat

} from "../../types";

import WalletCard from "../WalletCard/WalletCard";

const WalletStats=()=>{

    const [stats,setStats]=useState<WalletStat[]>([]);

    useEffect(()=>{

        loadWallet();

    },[]);

    const loadWallet=async()=>{

        const response=await getWalletData();

        setStats(response.stats);

    };

    return(

        <div className="wallet-stats">

            {

                stats.map((item)=>(

                    <WalletCard

                        key={item.id}

                        data={item}

                    />

                ))

            }

        </div>

    );

};

export default WalletStats;