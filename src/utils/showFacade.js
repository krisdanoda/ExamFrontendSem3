import apiFacade from "./apiFacade.js";

const URL = apiFacade.URL;

function showFacadeAPI() {

    const createShow = async (show) => {
        const url = URL + "/api/show";
        const data = await fetch(url, apiFacade.makeOptions("POST", true, show));

    }

    const getShows = async (setShows) => {
        const url = URL + "/api/show";
        const data = await fetch(url, apiFacade.makeOptions("GET", false));
        const result = await data.json();
        console.table(await result);
        setShows(await result)
        return await result;
    }

    const deleteShow = async (id) => {
        const url = URL + "/api/show/" + id;
        const data = await fetch(url, apiFacade.makeOptions("DELETE", false));
        const result = await data.json();
        return await result;
    }


    const attend = async (id) => {
        const url = URL + "/api/show/" + apiFacade.decodeJwt().guestID + "/" + id;
        await fetch(url, apiFacade.makeOptions("put"))
    }

    function updateShow(show){
        const url = URL + "/api/show";
        return fetch(url, apiFacade.makeOptions("PUT", true, show));
    }


    return {
        getShows,
        attend,createShow,
        deleteShow,updateShow
    }


}

const showFacade = showFacadeAPI();
export default showFacade;