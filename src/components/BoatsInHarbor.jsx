import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";
import Table from "react-bootstrap/Table";

function BoatsInHarbor(props) {
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        boatFacade.getBoats(setBoats)

    }, []);

    return (
        <div>
            <div style = {{ padding: "2rem"}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Harbor</th>
                        <th> Owners</th>

                    </tr>
                    </thead>
                    <tbody>
                    {boats.map(
                        (boat) => {
                            return (
                                <>
                                    <tr>
                                        <td> {boat.name} ></td>
                                        <td> {boat.brand}</td>
                                        <td> {} </td>
                                        <td>  </td>
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

export default BoatsInHarbor;