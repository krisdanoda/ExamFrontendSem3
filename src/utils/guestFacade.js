import {useEffect} from "react";
import apiFacade from "./apiFacade.js";
import facade from "./apiFacade.js";

const URL = "http://localhost:8080";

function showFacadeAPI() {

    const createGuestAccount = async (User) => {
        const url = URL + "/api/guest";

        const data = await fetch(url, apiFacade.makeOptions("POST", false,User));
        const result = await data.json();
        console.table(await result);


    }

    const getShows = async (setShows) => {
        const id = apiFacade.decodeJwt().guestID;
        const url = URL + "/api/guest/show/" + id;

        const data = await fetch(url, apiFacade.makeOptions("GET", false));
        const result = await data.json();

        console.table(await result);
        setShows(await result)

    }
    return {
        getShows,
        createGuestAccount

    }


}

const showFacade = showFacadeAPI();
export default showFacade;