import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import guestFacade from "../utils/guestFacade.js";
import "../styles/main.css"
function AttendingShows(props) {
    const [shows, setShows] = useState([]);

    useEffect(() => {

        console.log("updating...")
        guestFacade.getShows(setShows)

    }, [props.updateShows]);


    return (

        <div className={"basicPadding"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>TimeDate</th>
                    <th> duration</th>


                </tr>
                </thead>
                <tbody>
                {shows.map(
                    (show) => {
                        return (
                            <>
                                <tr>
                                    <td> {show.name} </td>
                                    <td> {show.location}</td>
                                    <td> {show.startDateAndTime} </td>
                                    <td>  {show.location}</td>

                                </tr>
                            </>
                        )
                    }
                )}
                </tbody>

            </Table>
        </div>


    );
}

export default AttendingShows;