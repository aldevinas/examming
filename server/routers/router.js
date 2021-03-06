const express = require('express');
const router = express.Router();
const middle = require('../middleware/middle');
const controller = require('../controllers/main');


router.post('/upload', middle.validator, controller.upload);

router.get('/storage', controller.storage);

router.get('/delete/:id', controller.delete);



module.exports = router;