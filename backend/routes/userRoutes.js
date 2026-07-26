const express =require('express');
const { registerUser, authUser, getUserProfile, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController.js');
const { protect,admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser); 
router.post('/login', authUser); 
router.get('/profile', protect, getUserProfile);
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);
module.exports = router