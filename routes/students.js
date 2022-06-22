const router = require('express').Router()

let Student = require('../models/Student')

router.route('/add').post((req, res) => {

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

router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })

})

router.route('/update/:id').put(async(req, res) => {
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
        res.status(200).send({status : 'User updated', user: update})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : 'Error with updating data', error : err.message})
    })
    })


module.exports = router