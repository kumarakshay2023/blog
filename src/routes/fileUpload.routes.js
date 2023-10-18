const express = require('express');
const router = express.Router();
const fileUploadController = require('../controllers/fileUpload.controller');

router.post('/upload',fileUploadController.uploadFile);

module.exports=router;