import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import apiFacade from "../utils/apiFacade.js";


function Header({setErrorMsg, loggedIn, setLoggedIn}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/search"><i className="fa fa-fw fa-search"></i> Search</NavLink>
            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>


            {loggedIn && apiFacade.decodeJwt().roles === "owner"?
                <NavLink to="/owners"><i className="fa fa-fw fa-envelope"></i> owners</NavLink>
                : <></>
            }
            {loggedIn && apiFacade.decodeJwt().roles === "owner"?
                <NavLink to="/boats"><i className="fa fa-fw fa-envelope"></i> Boats</NavLink>
                : <></>
            }

            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
        </nav>
    );
}

export default Header;
