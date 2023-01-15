import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Owners from "./pages/Owners.jsx";
import Boats from "./pages/Boats.jsx";

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)

    const obj = {
        name: "TestName",
        street: "TestStreet",
        town: "TestTown",
        country: "TestCountry",
    }

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="contact" element={<Contact address={obj}/>}/>
                <Route path="owners" element={<Owners></Owners>}></Route>
                <Route path="boats" element={<Boats></Boats>}></Route>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
