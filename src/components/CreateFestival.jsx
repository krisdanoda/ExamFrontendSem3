import React, {useState} from 'react';
import festivalFacade from "../utils/festivalFacade.js";
import "../styles/main.css"
function CreateFestival(props) {
    const [festival, setFestival] = useState({name:"" , city:"", startDate:"", duration: ""});

    const onChange = (evt) => {
        setFestival({...festival, [evt.target.id]: evt.target.value})
        console.log(festival)

    }

    const submit = () => {
        console.log(festival)
        festivalFacade.createFestival(festival);

    }

    return (
        <div className={"basicPadding"}>
        <h2> Create Festival</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" id="name" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">City</span>
                </div>
                <input type="text" id="city" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Start Date</span>
                </div>
                <input type="text" id="startDate" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Duration</span>
                </div>
                <input type="text" id="duration" className="form-control" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <button onClick={submit} class="btn btn-primary"> Submit </button>

        </div>


    );
}

export default CreateFestival;