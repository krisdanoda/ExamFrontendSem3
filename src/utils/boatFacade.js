
import apiFacade from "./apiFacade.js";

const URL = "http://localhost:8080";

function ownerFacadeAPI() {

    const getHarbors = async (setHarbors) => {
        const url = URL + "/api/boat/harbor";
        const data = await fetch(url, apiFacade.makeOptions("GET", false));
        const result = await data.json();
        console.table(await result);
        setHarbors(await result)

    }


    const getBoats = async (setBoats, id) => {
        id = 1;
        const url = URL + "/api/boat/" + id;
        console.log(url);
        const data = await fetch(url, apiFacade.makeOptions("GET", false));
        const result = await data.json();
        console.table(await result);
        setBoats(await result)
    }

    return {
        getHarbors,
        getBoats

    }


}

const harborFacade = ownerFacadeAPI();
export default harborFacade;