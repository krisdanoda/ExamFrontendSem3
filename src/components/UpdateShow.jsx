import React, {useEffect, useState} from 'react';
import ShowFacade from "../utils/ShowFacade.js";
import apiFacade from "../utils/apiFacade.js";
import "../styles/main.css"
function UpdateShow(props) {
    const [shows, setShows] = useState([]);

    const [currentShow, setCurrentShow] = useState({name:"", location:"", startDate:"",duration:""});
    const [currentUpdatingShow, setCurrentUpdatingShow] = useState({name:"", location:"", startDate:"",duration:""})
    const [date, setDate] = useState("2023-01-17T08:30")

    useEffect(() => {
        ShowFacade.getShows(setShows)

    }, []);


    const onselect = (evt) => {
        const key = evt.target.value
        setCurrentShow(shows.find((Show) => Show.id == key) )

    }

    const onChange = (evt) => {
        setCurrentShow({...currentShow, [evt.target.id]: evt.target.value})

    }

    const submit = () => {
        ShowFacade.updateShow(currentShow)
        console.log(currentShow);
    }

    return (
        <div className={"basicPadding"}>
            <h3> Select a Show </h3>
            <select className="form-select" onChange={onselect}>
                {shows.map(
                    (Show) => {
                        return <option value={Show.id}> {Show.name} </option>
                    }
                )}
            </select>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" id="name" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentShow.name}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Location</span>
                </div>
                <input type="text" id="location" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentShow.location}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Date and time</span>
                </div>
                <input onChange={onChange} type="datetime-local" id="startDateAndTime"
                       name="date" value={currentShow.startDateAndTime}
                       min="2023-01-17T08:30" max="2030-06-14T00:00"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Duration</span>
                </div>
                <input type="number" id="duration" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentShow.duration}
                       aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                    <span className="input-group-text" >Hours</span>
                </div>
            </div>

            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>
    );
}

export default UpdateShow;