import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PetForm from '../Components/PetForm';

const EditPet = ({id}) => {
        
        const initialState = {
            name:"",
            type:"",
            description:"",
            skillOne:"",
            skillTwo:"",
            skillThree:""
        }
        
        const [editPet, setEditPet] = useState({});
        const [errors, setErrors] = useState(initialState);

        useEffect (() => {
            axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=> setEditPet(res.data))
            .catch(err => console.log(err))
        }, [id])

        const handleChange = (e) => {
            setEditPet ({
                ...editPet,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/pet/${id}`, editPet)
                .then(res => navigate('/'))
                .catch(err => setErrors(err.response.data))
        }

    return(
        <div>
            <Link to="/">Back to Homepage</Link>

            <h2>Edit to Pet</h2>
            <PetForm
                form={editPet}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue="Edit" />
        </div>
    )
}

export default EditPet;