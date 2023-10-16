const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const postController = require('../controllers/post.controller');


router.post('/add',auth,postController.createPost);
router.put('/edit/:id',auth,postController.editPost);

module.exports=router;