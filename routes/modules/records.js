const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  res.render('new')
})

//create
router.post('/new', (req, res) => {
  
})

router.get('/edit', (req, res) => {
  res.render('edit')
})

//edit
router.post('/edit', (req, res) => {

})

module.exports = router