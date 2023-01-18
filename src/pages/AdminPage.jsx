import React from 'react';
import CreateFestival from "../components/CreateFestival.jsx";
import CreateShow from "../components/CreateShow";
import CreateAccount from "../components/CreateAccount.jsx";

function AdminPage(props) {
    return (
        <div>

            <CreateFestival></CreateFestival>
            <CreateShow></CreateShow>
            <CreateAccount></CreateAccount>
        </div>
    );
}

export default AdminPage;