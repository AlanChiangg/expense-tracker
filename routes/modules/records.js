const express = require('express')
const router = express.Router()

//create
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  
})

//edit
router.get('/edit', (req, res) => {
  res.render('edit')
})

router.post('/edit', (req, res) => {

})

module.exports = router