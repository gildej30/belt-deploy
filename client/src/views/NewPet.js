import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import PetForm from "../Components/PetForm";
import axios from "axios";

const NewPet = (props) => {
    const initialState = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }

    const [newPet, setNewPet] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = (e) => {
        setNewPet({
            ...newPet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet", newPet)
            .then(res => {navigate('/'); })
            .catch(err => setErrors(err.response.data));
    }
    
    return (
        <div>
            <Link to="/">Back to Homepage</Link>

            <h2>Add New Pet</h2>
            <PetForm 
                form={newPet}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue="add pet" />
        </div>
    )
}

export default NewPet;