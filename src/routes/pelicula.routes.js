const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/pelicula.controller');

/* Peticionnes http al servidor */

router.get('/', controller.getPeliculas);
router.get('/:id', controller.getPelicula);

module.exports = router;