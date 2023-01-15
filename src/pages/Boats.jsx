import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";
import BoatsInHarbor from "../components/BoatsInHarbor.jsx";

function Boats(props) {

    const [currentHarbor, setCurrentHarbor] = useState(1);
    const [harbors, setHarbors] = useState([]);
    useEffect(() => {
        boatFacade.getHarbors(setHarbors);
    }, []);


    useEffect(() => {

    }, [currentHarbor]);

    const update = (event) => {
        const key = event.target.value;
        console.log("key" + key);
        setCurrentHarbor(key)
    }


    return (
        <div>
        <select onChange={update}>
            {harbors.map((harbor)=> {

                return(<option value={harbor.id}> {harbor.name}</option>)

            })}

        </select>

        <BoatsInHarbor harborID={currentHarbor}></BoatsInHarbor>
        </div>
    );
}

export default Boats;