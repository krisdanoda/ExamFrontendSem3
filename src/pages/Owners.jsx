import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import ownerFacade from "../utils/ownerFacade.js";
function Owners(props) {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
       ownerFacade.getOwners(setOwners)
    }, []);
    
    
    return (
        <div><div style = {{ padding: "2rem"}}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th> boat</th>

                </tr>
                </thead>
                <tbody>
                {owners.map(
                    (owner) => {
                        return (
                            <>
                                <tr>
                                    <td> {owner.name} ></td>
                                    <td> {owner.userName}</td>
                                    <td> {owner.address} </td>
                                    <td>  </td>
                                </tr>
                            </>
                        )
                    }
                )}
                </tbody>

            </Table>
        </div></div>
    );
}

export default Owners;