import "./FriendsButton.css";

import { Eye } from "lucide-react";

interface FriendsButtonProps{

    count:number;

    onView:()=>void;

}

const FriendsButton=({

    count,

    onView

}:FriendsButtonProps)=>{

    return(

        <button

            className="friends-btn"

            onClick={onView}

        >

            <Eye size={16}/>

            {count}

        </button>

    );

};

export default FriendsButton;