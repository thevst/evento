const express = require('express')
const router = express.Router()

// catch-all undefined routes
router.all('*', (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Not found!',
  })
})

module.exports = router
