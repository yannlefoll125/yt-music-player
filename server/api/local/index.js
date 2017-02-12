'use strict';

var express = require('express');
var controller = require('./local.controller');

const fs = require('fs');
const path = require('path');

var router = express.Router();

router.get('/', controller.index);
router.get('/:name', controller.show);

/*
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);
*/

module.exports = router;
