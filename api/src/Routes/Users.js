const {Router} = require('express')
const router = Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  changePassword
} = require('../Controllers/User.js')

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:_id', getUserById)
router.delete('/:_id', deleteUser)
router.put('/:_id', changePassword)

module.exports = router;