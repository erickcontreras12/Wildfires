const express = require('express');
const router = express.Router();
('');
const disastersController = require('../controllers/disasters.controller');

router.get('/', disastersController.getDisasters);

module.exports = router;
