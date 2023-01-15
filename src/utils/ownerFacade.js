import {useEffect} from "react";
import apiFacade from "./apiFacade.js";

const URL = "http://localhost:8080";

function ownerFacadeAPI() {

    const getOwners = async (setOwners) => {
        const url = URL + "/api/user/owners";

        const data = await fetch(url, apiFacade.makeOptions("GET", false));
        const result = await data.json();

        console.table(await result);
        setOwners(await result)

    }
    return {
        getOwners

    }


}

const ownerFacade = ownerFacadeAPI();
export default ownerFacade;