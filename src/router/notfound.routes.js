const express = require('express')
const router = express.Router()

router.use('*', (req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Not Found!',
  });
});

module.exports = router