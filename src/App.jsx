import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Owners from "./pages/Owners.jsx";
import Shows from "./pages/Shows.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminSHows from "./components/AllShowsAdmin.jsx";
import AdminPage2 from "./pages/AdminPage2.jsx";

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
                <Route path="show" element={<Shows></Shows>}></Route>
                <Route path="adminpage" element={<AdminPage></AdminPage>}></Route>
                <Route path="adminshows" element={<AdminSHows></AdminSHows>}></Route>
                <Route path="adminpageupdate" element={<AdminPage2></AdminPage2>}></Route>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
