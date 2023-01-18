import React, {useState} from 'react';
import showFacade from "../utils/festivalFacade.js";
import ShowFacade from "../utils/showFacade.js";
import "../styles/main.css"
function CreateShow(props) {
    const [show, setShow] = useState({name:"" , location:"", startDateAndTime:"", duration: ""});
    const [date, setDate] = useState("2023-01-17T08:30")

    const onChange = (evt) => {
        setShow({...show, [evt.target.id]: evt.target.value})
        setDate(evt.date)

    }

    const submit = () => {
        console.log(show)
        ShowFacade.createShow(show)

    }

    return (
        <div className={"basicPadding"}>
            <h2> Create Show</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Name</span>
                </div>
                <input type="text" id="name" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Location</span>
                </div>
                <input type="text" id="location" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Date and time</span>
                </div>
                <input onChange={onChange} type="datetime-local" id="startDateAndTime"
                       name="date" value={date}
                       min="2023-01-17T08:30" max="2030-06-14T00:00"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Duration</span>
                </div>
                <input type="number" id="duration" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                    <span className="input-group-text" >Hours</span>
                </div>
            </div>

            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>


    );
}

export default CreateShow;