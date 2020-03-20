import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const Details = ({id}) => {
    const [pet, setPet] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=> setPet(res.data) )
            .catch(err => console.log(err))
    }, [id])

    const destroyPet = () => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => navigate('/'))
    }

    return (
        <div>
            <Link to="/" >Back to Homepage</Link>

            <div className="card">
                <h2>{pet.name}</h2>
                <p>{pet.description}</p>

                <div>
                    <h4>Skills if any:</h4>
                    <ol>
                        <li>{pet.skillOne}</li>
                        <li>{pet.skillTwo}</li>
                        <li>{pet.skillThree}</li>
                    </ol>
                </div>

                <button className="btn btn-danger col-5 mx-auto"  onClick={() => destroyPet()}>Adopt this pet!</button>
            </div>
        </div>
    )
}

export default Details;