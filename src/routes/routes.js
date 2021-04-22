const { Router } = require('express');
const router = Router();
const { getUsers, createUser } = require('../controllers/controllers')

router.get('/users', getUsers);

router.post('/users', createUser);

module.exports = router;
