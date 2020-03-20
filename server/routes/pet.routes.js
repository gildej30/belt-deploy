const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.index)
    app.get('/api/pet/:id', PetController.show)
    app.post('/api/pet', PetController.create)
    app.put('/api/pet/:id', PetController.update)
    app.delete('/api/pet/:id', PetController.destroy)
}