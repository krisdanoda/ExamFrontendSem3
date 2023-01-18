import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import showFacade from "../utils/showFacade.js";
import "../styles/main.css"
function Shows(props) {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        showFacade.getShows(setShows)

    }, []);

    const submit = (evt) => {


        showFacade.attend(evt.target.value)
        props.setUpdateShows(!props.updateShows)
        console.log("time to update...")
        console.log(evt.target.value)
    }

    return (
        <div>

            <div className={"basicPadding"}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>TimeDate</th>
                        <th> duration</th>
                        <th> Attend</th>

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
                                        <td>  <button value={show.id} onClick={ submit} type="button" className="btn btn-success"> Attend </button></td>
                                    </tr>
                                </>
                            )
                        }
                    )}
                    </tbody>

                </Table>
            </div>

        </div>
    );
}

export default Shows;