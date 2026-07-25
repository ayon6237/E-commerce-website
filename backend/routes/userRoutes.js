const express =require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/userController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser); 
router.post('/login', authUser); 
router.get('/profile', protect, getUserProfile);

module.exports = router