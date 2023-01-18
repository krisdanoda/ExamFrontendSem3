import apiFacade from "./apiFacade.js";

const URL = "http://localhost:8080";

function festivalFacadeAPI() {

    const getFestivals = () => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/festival", options).then(handleHttpErrors);
    }

    const createFestival = async (festival) => {
        const url = URL + "/api/festival";
        const data = await fetch(url, apiFacade.makeOptions("POST", true, festival));
    }

    function updateFestival(festival){
        const url = URL + "/api/festival";
        return fetch(url, apiFacade.makeOptions("PUT", true, festival));
    }

    return {
        createFestival,
        updateFestival,
        getFestivals
    }

    function handleHttpErrors(res) {
        if (!res.ok) {
            return Promise.reject({status: res.status, fullError: res.json()})
        }
        return res.json();
    }


}

const festivalFacade = festivalFacadeAPI();
export default festivalFacade;