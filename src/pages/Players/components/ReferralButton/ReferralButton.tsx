import "./ReferralButton.css";

interface ReferralButtonProps{

    count:number;

    earnings:number;

}

const ReferralButton=({

    count,

    earnings

}:ReferralButtonProps)=>{

    return(

        <div className="referral-box">

            <strong>

                {count}

            </strong>

            <span>

                ₹{earnings.toLocaleString()}

            </span>

        </div>

    );

};

export default ReferralButton;