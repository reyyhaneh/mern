const express = require('express')
const router = express.Router()
const path = require('path')

// a get request. either '/' or index or index.html (regex syntax)
router.get('^/$|/index(.html)?', (req, res) => {
    //send the requested file
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))

})

module. exports = router