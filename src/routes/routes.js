const { Router } = require('express');
const router = Router();
const { getUsers,getUserByID, createUser,updateUser, deleteUser } = require('../controllers/controllers')

router.get('/users', getUsers);

router.get('/users/:id', getUserByID);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);



module.exports = router;
