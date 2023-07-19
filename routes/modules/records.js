const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const User = require('../../models/user')

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      res.render("new", { categories })
    })
})

//create
router.post('/new', (req, res) => {
  const userId = req.user._id
  const { name, date, categoryName, amount } = req.body
  Category.findOne({ name: categoryName })
    .lean()
    .then(category => {
      // 從 Category 取得 categoryId，再新增資料
      let categoryId = category._id

      Record.create({
        name,
        date,
        amount,
        userId,
        categoryId
      })
    })
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

router.get('/edit', (req, res) => {
  res.render('edit')
})

//edit
router.post('/edit', (req, res) => {

})

module.exports = router