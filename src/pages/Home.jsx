import React from 'react';
import apiFacade from "../utils/apiFacade.js";

function Home(props) {

    return (
        <div>
            <h3>Homepage1</h3>
            <button onClick={()=>console.log(apiFacade.decodeJwt())}> HI </button>

        </div>
    );
}

export default Home;
