const express = require('express');
const router = express.Router();
const controller = require('../controllers/sala.controller');

router.get('/', controller.getSalas);

module.exports = router;