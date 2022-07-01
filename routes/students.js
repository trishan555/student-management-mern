const express = require('express')
const router = express.Router()
const {
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent,
    getOneStudent,
} = require('../controllers/studentController')

router.post('/add', postStudent)

router.get('/', getStudent)

router.put('/update/:id', updateStudent)

router.delete('/delete/:id', deleteStudent)

router.get('/get/:id', getOneStudent)

module.exports = router
