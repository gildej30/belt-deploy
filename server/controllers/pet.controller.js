const Pet = require('../models/pet.model');

module.exports = {

    index: (req, res) => {
        Pet.find()
            .then(pets => res.json(pets))
            .catch(err => res.status(400).json(err.errors))
    },

    show: (req, res) => {
        Pet.findById({_id:req.params.id})
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err.errors))
    },

    create: (req, res) => {
        console.log(req.body)
        Pet.create(req.body)
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {
        console.log(req.body)
        Pet.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, useFindAndModify: true})
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err.errors))
    },

    destroy: (req, res) => {
        Pet.deleteOne({_id:req.params.id})
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err.errors))
    }
}