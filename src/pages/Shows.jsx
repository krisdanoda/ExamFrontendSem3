import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import showFacade from "../utils/showFacade.js";
import AllShows from "../components/AllShows";
import AttendingShows from "../components/AttendingShows.jsx";

function Shows(props) {

    const [updateShows, setUpdateShows] = useState(true);

    return <div>

        <AttendingShows updateShows = {updateShows}></AttendingShows>
        <AllShows updateShows = {updateShows} setUpdateShows = {setUpdateShows}></AllShows>

    </div>
}

export default Shows;