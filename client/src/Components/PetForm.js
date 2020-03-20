import React from 'react';
import Input from "./Input";

const PetForm = ({form, handleChange, handleSubmit, submitValue, errors }) => {
    return (
        <form className="col-5 mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <Input 
                type="text"
                name="name"
                value={form.name}
                handleChange={handleChange}
                error={errors.name ? errors.name.message : null}
                label="Pet Name: "
            />

            <Input 
                type="text"
                name="type"
                value={form.type}
                handleChange={handleChange}
                error={errors.type ? errors.type.message : null}
                label="Pet Type: "
            />

            <Input 
                type="text"
                name="description"
                value={form.description}
                handleChange={handleChange}
                error={errors.description ? errors.description.message : null}
                label="Pet Description: "
            />

            <Input 
                type="text"
                name="skillOne"
                value={form.skillOne}
                handleChange={handleChange}
                label="First Skill: "
            />

            <Input 
                type="text"
                name="skillTwo"
                value={form.skillTwo}
                handleChange={handleChange}
                label="Second Skill: "
            />

            <Input 
                type="text"
                name="skillThree"
                value={form.skillThree}
                handleChange={handleChange}
                label="Third Skill: "
            />

            <input className="btn btn-success" type="submit" value={submitValue} />
        </form>
    )
}

export default PetForm;