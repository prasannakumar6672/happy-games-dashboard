import "./SearchBar.css";

import { Search } from "lucide-react";

interface SearchBarProps{

    value:string;

    onChange:(value:string)=>void;

}

const SearchBar=({

    value,

    onChange

}:SearchBarProps)=>{

    return(

        <div className="search-bar">

            <Search

                size={20}

            />

            <input

                type="text"

                placeholder="Search by player name, username or referral code..."

                value={value}

                onChange={(e)=>onChange(e.target.value)}

            />

        </div>

    );

};

export default SearchBar;