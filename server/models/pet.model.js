const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "A pet must have a name."],
        minlength: [3, "Name but be at least 3 chars."]
    },

    type: {
        type: String,
        required:[true, "What type of pet is this?"],
        minlength: [3, "The type but be at least 3 chars."]
    },

    description: {
        type: String,
        required:[true, "Please describe this pet."],
        minlength: [3, "The description must but be at least 3 chars."]
    },

    skillOne:{
        type: String,
        default: ""
    },

    skillTwo:{
        type: String,
        default: ""
    },

    skillThree:{
        type: String,
        default: ""
    }

},{timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

//be sure to change the word ACTION to a more fitting name 