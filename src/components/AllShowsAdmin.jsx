import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import showFacade from "../utils/showFacade.js";
import "../styles/main.css"
function AdminSHows(props) {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        showFacade.getShows(setShows)

    }, []);

    const submit = (evt) => {
        showFacade.deleteShow(evt.target.value)
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
                        <th> Delete</th>

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
                                        <td>  {show.duration}</td>
                                        <td>  <button value={show.id} onClick={ submit} type="button" className="btn btn-danger"> Delete </button></td>
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

export default AdminSHows;