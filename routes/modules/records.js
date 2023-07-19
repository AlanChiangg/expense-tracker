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

// Create
router.post('/new', (req, res) => {
  const userId = req.user._id
  const { name, date, categoryName, amount } = req.body
  Category.findOne({ name: categoryName })
    .lean()
    .then(category => {
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

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Category.find()
    .lean()
    .then(categories => {
      Record.findOne({ _id, userId })
        .populate("categoryId")
        .lean()
        .then(record => {
          categories.map((category, index) => {
            if (category.name === record.categoryId.name) {
              categories[index]["isChoosed"] = true
            }
          })
          res.render("edit", { categories, record })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// Edit
router.put('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, categoryName, amount } = req.body
  Category.findOne({ name: categoryName })
    .then(category => {
      Record.findOne({ _id, userId })
        .then(record => {
          record.name = name
          record.date = date
          record.amount = amount
          record.categoryId = category._id

          return record.save()
        })
        .then(() => res.redirect("/"))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router