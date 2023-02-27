const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profile.controller')

router.post('/add', profileController.add);
router.get('/get', profileController.get);

module.exports = router;