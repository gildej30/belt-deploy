import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Main = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res=> setPets(res.data.sort((a, b) => a.type > b.type ? 1 : -1 )))
            .catch(err => console.log(err))
    })

    // const destroyPet = (e, id) => {
    //     axios.delete(`http://localhost:8000/api/pet/${id}`)
    //         .then(res => {
    //             setPets(
    //             pets.filter(pet => pet._id !== id)
    //         )
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div>
            <Link to="/pet/new">Add Pet</Link>
            <table className="table table-ordered col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet,idx) => {
                        return <tr key={idx} >
                                    <td>
                                        {pet.name}
                                    </td>

                                    <td>
                                        {pet.type}
                                    </td>

                                    <td>
                                        <Link className="btn btn-warning" to={`/pet/${pet._id}/edit/`} >Edit</Link>
                                        <Link className="btn btn-success" to={`/pet/${pet._id}`} >Details</Link>
                                    </td>

                                    {/* <td>
                                        <Link className="btn btn-primary" to={`/author/${author._id}/edit`} >Like</Link>
                                    </td> */}
                                </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Main;