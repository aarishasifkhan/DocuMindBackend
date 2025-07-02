const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { extractDataFromDocument } = require('../controllers/documentController');

router.post('/upload', upload.single('file'), extractDataFromDocument);

module.exports = router;