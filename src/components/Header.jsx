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

            { loggedIn && apiFacade.decodeJwt().roles.includes("admin")  && <>
                 <NavLink to="/adminpage"><i className="fa fa-fw fa-plus-square-o"></i> Create Page</NavLink>
                <NavLink to="/adminshows"><i className="fa fa-fw fa-minus-square-o"></i> Admin Shows</NavLink>
                <NavLink to="/adminpageupdate"><i className="fa fa-fw fa-envelope"></i> Update page</NavLink>
            </>
            }

            { loggedIn && apiFacade.decodeJwt().roles.includes("guest")  && <>
                <NavLink to="/show"><i className="fa fa-fw fa-music"></i> Shows</NavLink>
            </>}



            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
        </nav>
    );
}

export default Header;
