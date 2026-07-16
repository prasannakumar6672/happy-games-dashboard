import "./ActionButtons.css";

import {

    Ban,

    CheckCircle

} from "lucide-react";

interface ActionButtonsProps{

    status:"Active"|"Blocked";

    onToggle:()=>void;

}

const ActionButtons=({

    status,

    onToggle

}:ActionButtonsProps)=>{

    return(

        <button

            className={

                status==="Active"

                ? "block-btn"

                : "unblock-btn"

            }

            onClick={onToggle}

        >

            {

                status==="Active"

                ? <Ban size={16}/>

                : <CheckCircle size={16}/>

            }

            {

                status==="Active"

                ? "Block"

                : "Unblock"

            }

        </button>

    );

};

export default ActionButtons;