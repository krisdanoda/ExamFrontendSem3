import React from 'react';
import UpdateFestival from "../components/UpdateFestival.jsx";
import UpdateShow from "../components/UpdateShow.jsx";

function AdminPage2(props) {
    return (
        <div>
            <UpdateFestival></UpdateFestival>
            <UpdateShow></UpdateShow>
        </div>
    );
}

export default AdminPage2;