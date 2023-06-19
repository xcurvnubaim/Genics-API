const router = require("express").Router();
const {
    getUsers,
    saveUser
} = require('../controllers/usersController');

router.get('/', getUsers);
router.post('/', saveUser);

module.exports = router;