const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome to your dashboard, user ID: ${req.user.id}` });
});

module.exports = router;
