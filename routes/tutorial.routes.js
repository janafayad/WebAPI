module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller.js')

    var router = require('express').Router();
    router.post('/', tutorials.create);
    router.put('/:id', tutorials.update);
    router.put('/delete/:id', tutorials.delete);
    router.get('/all', tutorials.findAll);
    app.use('/', router);
}