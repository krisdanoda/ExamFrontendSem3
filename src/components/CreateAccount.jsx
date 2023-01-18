import React, {useState} from 'react';
import ShowFacade from "../utils/showFacade.js";
import guestFacade from "../utils/guestFacade.js";
import "../styles/main.css"
function CreateAccount(props) {
    const [user, setUser] = useState({
        userName: "",
        userPass: "",
        guestAccount: {name: "", phoneNumber: 12345678, email: "", status: ""},
        roleListRoleNames: ["guest"]
    });

    const [guestAccount, setGuestAccount] = useState({name: "", phoneNumber: 12345678, email: "", status: ""})

    const onChangeUser = (evt) => {
        setUser({...user, [evt.target.id]: evt.target.value})
        console.log(user)

    }


    const onChangeGuest = (evt) => {
        setGuestAccount({...guestAccount, [evt.target.id]: evt.target.value})
        console.log(guestAccount)

    }

    const submit = () => {
        user.guestAccount= guestAccount;
        guestFacade.createGuestAccount(user)
        console.log(user)
    }

    return (
        <div>
            <div className={"basicPadding"}>
                <h2> Create Guest Account</h2>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">userName</span>
                    </div>
                    <input type="text" id="userName" className="form-control" aria-label="Name"
                           onChange={onChangeUser}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">password</span>
                    </div>
                    <input type="text" id="userPass" className="form-control" aria-label="Name"
                           onChange={onChangeUser}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">name</span>
                    </div>
                    <input type="text" id="name" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">phoneNumber</span>
                    </div>
                    <input type="number" id="phoneNumber" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Status</span>
                    </div>
                    <input type="text" id="status" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="email" id="email" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <button onClick={submit} class="btn btn-primary"> Submit</button>

            </div>


        </div>
    );
}

export default CreateAccount;