const router = require('express').Router();

const {recieveData} = require('../controllers/form');

router.post('/', recieveData);

module.exports = router
