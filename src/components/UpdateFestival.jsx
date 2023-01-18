import React, {useEffect, useState} from 'react';
import FestivalFacade from "../utils/festivalFacade.js";
import apiFacade from "../utils/apiFacade.js";
import "../styles/main.css"
function UpdateFestival(props) {
    const [festivals, setFestivals] = useState([]);

    const [currentFestival, setCurrentFestival] = useState({name:"", location:"", startDate:"",duration:""});
    const [currentUpdatingFestival, setCurrentUpdatingFestival] = useState({name:"", location:"", startDate:"",duration:""})

    useEffect(() => {
        FestivalFacade.getFestivals().then(res => {
            console.log(res)
            setFestivals(res)})

    }, []);


    const onselect = (evt) => {
        const key = evt.target.value
        setCurrentFestival(festivals.find((festival) => festival.id == key) )
    }

    const onChange = (evt) => {
        setCurrentFestival({...currentFestival, [evt.target.id]: evt.target.value})
    }

    const submit = () => {
        FestivalFacade.updateFestival(currentFestival)
    }

    return (
        <div className={"basicPadding"}>
            <h3> Select a festival </h3>
            <select className="form-select" onChange={onselect}>
                {festivals.map(
                    (festival) => {
                        return <option value={festival.id}> {festival.name} </option>
                    }
                )}
            </select>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" id="name" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentFestival.name}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">City</span>
                </div>
                <input type="text" id="city" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentFestival.city}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Start Date</span>
                </div>
                <input type="text" id="startDate" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentFestival.startDate}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Duration</span>
                </div>
                <input type="text" id="duration" className="form-control" aria-label="Name"
                       onChange={onChange} value={currentFestival.duration}
                       aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                    <span className="input-group-text" >Days</span>
                </div>
            </div>

            <button  onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>
    );
}

export default UpdateFestival;