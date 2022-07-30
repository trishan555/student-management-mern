import React, { useState } from 'react'
import axios from 'axios'

const AddStudent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const sendData = (e) => {
        e.preventDefault()

        const newStudent = {
            name,
            age,
            gender,
        }

        axios
            .post('http://localhost:8070/student/add', newStudent)
            .then(() => alert('Studen Added'))
            .catch((err) => alert(err))
    }

    return (
        <form
            onSubmit={sendData}
            className='container'
            style={{ padding: '2rem' }}
        >
            <div className='mb-3'>
                <label className='form-label'>Student Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Student Age</label>
                <input
                    type='text'
                    className='form-control'
                    id='age'
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Student Gender</label>
                <input
                    type='text'
                    className='form-control'
                    id='gender'
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    )
}

export default AddStudent