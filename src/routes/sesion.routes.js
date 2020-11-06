const express = require('express');
const router = express.Router();
const controller = require('../controllers/sesion.controller');

router.get('/:id', controller.getSesiones);

module.exports = router;