const express = require('express')
const router = express.Router()

let Student = require('../models/Student')

router.post('/add',(req, res) => {

    const name = req.body.name
    const age = Number(req.body.age)
    const gender = req.body.gender

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(() => {
        res.json('Student Added')
    }).catch((err) =>{
        console.log(err);
    })
})

router.get('/', (req, res) => {
    Student.find().then((stude) => {
        res.json(stude)
    }).catch((err) => {
        console.log(err);
    })

})

router.put('/update/:id', async(req, res) => {
    let userId = req.params.id

    //same as line 9
    const { name, age, gender} = req.body

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
        res.status(200).send({status : 'User updated'})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : 'Error with updating data', error : err.message})
    })
    })


router.delete('/delete/:id', async (req, res) => {
    let userId = req.params.id
    await Student.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status : "User deleted"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : 'Error with delete user', error : err.message})

    })

})

router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id
    await Student.findById(userId)
    .then((std) => {
        res.status(200).send({status : "User fetch", std})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : 'Error with find user', error : err.message})

    })
})

module.exports = router