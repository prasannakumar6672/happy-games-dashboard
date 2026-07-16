import "./ActionButtons.css";

import {

    Check,

    X

} from "lucide-react";

interface ActionButtonsProps{

    onApprove:()=>void;

    onReject:()=>void;

}

const ActionButtons=({

    onApprove,

    onReject

}:ActionButtonsProps)=>{

    return(

        <div className="action-buttons">

            <button

                className="approve-btn"

                onClick={onApprove}

            >

                <Check size={18}/>

                Approve

            </button>

            <button

                className="reject-btn"

                onClick={onReject}

            >

                <X size={18}/>

                Reject

            </button>

        </div>

    );

};

export default ActionButtons;