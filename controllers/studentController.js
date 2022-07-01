let Student = require('../models/Student')

const postStudent = (req, res) => {
    const name = req.body.name
    const age = Number(req.body.age)
    const gender = req.body.gender

    const newStudent = new Student({
        name,
        age,
        gender,
    })

    newStudent
        .save()
        .then(() => {
            res.json('Student Added')
        })
        .catch((err) => {
            console.log(err)
        })
}

const getStudent = (req, res) => {
    Student.find()
        .then((stude) => {
            res.json(stude)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateStudent = async (req, res) => {
    let userId = req.params.id

    //same as line 9
    const { name, age, gender } = req.body

    const updateStudent = {
        name,
        age,
        gender,
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
        .then(() => {
            res.status(200).json({ status: 'User updated' })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                status: 'Error with updating data',
                error: err.message,
            })
        })
}

const deleteStudent = async (req, res) => {
    let userId = req.params.id
    await Student.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).json({ status: 'User deleted' })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                status: 'Error with delete user',
                error: err.message,
            })
        })
}

const getOneStudent = async (req, res) => {
    let userId = req.params.id
    await Student.findById(userId)
        .then((std) => {
            res.status(200).json({ status: 'User fetch', std })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                status: 'Error with find user',
                error: err.message,
            })
        })
}

module.exports = {
    postStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getOneStudent,
}
