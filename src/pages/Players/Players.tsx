import { useState } from "react";

import "./Players.css";

import PlayersHeader from "./components/PlayersHeader/PlayersHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import PlayersTable from "./components/PlayersTable/PlayersTable";
import Pagination from "./components/Pagination/Pagination";

const Players=()=>{

    const [search,setSearch]=useState("");

    const [currentPage,setCurrentPage]=useState(1);

    return(

        <div className="players-page fade-in">

            <PlayersHeader/>

            <SearchBar

                value={search}

                onChange={setSearch}

            />

            <PlayersTable

                search={search}

            />

            <Pagination

                currentPage={currentPage}

                totalPages={5}

                onPageChange={setCurrentPage}

            />

        </div>

    );

};

export default Players;