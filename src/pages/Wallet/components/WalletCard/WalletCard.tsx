import "./WalletCard.css";

import {

    CircleDollarSign,
    Wallet,
    Users,
    Trophy

} from "lucide-react";

import type {

    WalletStat

} from "../../types";

interface WalletCardProps{

    data:WalletStat;

}

const WalletCard=({

    data

}:WalletCardProps)=>{

    const getIcon=()=>{

        switch(data.icon){

            case "ads":

                return <CircleDollarSign size={28}/>;

            case "platform":

                return <Wallet size={28}/>;

            case "players":

                return <Users size={28}/>;

            case "reward":

                return <Trophy size={28}/>;

            default:

                return <CircleDollarSign size={28}/>;

        }

    };

    return(

        <div className="wallet-card">

            <div className="wallet-icon">

                {getIcon()}

            </div>

            <h2>

                ₹ {data.amount.toLocaleString()}

            </h2>

            <p>

                {data.title}

            </p>

        </div>

    );

};

export default WalletCard;