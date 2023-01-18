import React, {useEffect, useState} from 'react';
import ShowFacade from "../utils/showFacade.js";
import guestFacade from "../utils/guestFacade.js";
import "../styles/main.css"
import festivalFacade from "../utils/festivalFacade.js";
import FestivalFacade from "../utils/festivalFacade.js";

function CreateAccount(props) {
    const [festivals, setFestivals] = useState([])
    const [guestAccount, setGuestAccount] = useState({name: "", phoneNumber: 12345678, email: "", status: ""})
    const [user, setUser] = useState({
        userName: "",
        userPass: "",
        guestAccount: {name: "", phoneNumber: 12345678, email: "", status: ""},
        roleListRoleNames: ["guest"]
    });
    const onselect = (evt) => {
        const key = evt.target.value
        const fes = (festivals.find((festival) => festival.id == key) )
       guestAccount.festival = fes

    }
    const onChangeUser = (evt) => {

        setUser({...user, [evt.target.id]: evt.target.value})

    }

    useEffect(() => {
        FestivalFacade.getFestivals().then(res => {
            console.table(res)
            setFestivals(res)})

    }, []);


    const onChangeGuest = (evt) => {
        setGuestAccount({...guestAccount, [evt.target.id]: evt.target.value})

    }

    const submit = () => {
        user.guestAccount = guestAccount;
        guestFacade.createGuestAccount(user)
        console.log(user)
    }

    return (
        <div>
            <div className={"basicPadding"}>
                <h2> Create Guest Account</h2>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >userName</span>
                    </div>
                    <input type="text" id="userName" className="form-control" aria-label="Name"
                           onChange={onChangeUser}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >password</span>
                    </div>
                    <input type="text" id="userPass" className="form-control" aria-label="Name"
                           onChange={onChangeUser}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >name</span>
                    </div>
                    <input type="text" id="name" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >phoneNumber</span>
                    </div>
                    <input type="number" id="phoneNumber" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Status</span>
                    </div>
                    <input type="text" id="status" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Email</span>
                    </div>
                    <input type="email" id="email" className="form-control" aria-label="Name"
                           onChange={onChangeGuest}
                           aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Festival</span>
                    </div>
                    <select className="form-select" onChange={onselect}>
                        {festivals.map(
                            (festival) => {
                                return <option value={festival.id}> {festival.name} </option>
                            }
                        )}
                    </select>
                </div>


                <button onClick={submit} class="btn btn-primary"> Submit</button>

            </div>


        </div>
    );
}

export default CreateAccount;