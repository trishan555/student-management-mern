import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from 'react-bootstrap'

const AllStudent = () => {
    //modal class
    const [show, setShow] = useState(false)

    //functional
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
    }, [])

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        setShow(true)
    }

    const getStudents = () => {
        axios
            .get('http://localhost:8070/student')
            .then((res) => {
                setStudents(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const deleteStudent = (id) => {
        axios
            .delete(`http://localhost:8070/student/delete/${id}`)
            .then(() => {
                alert('Student Deleted !!!')
                getStudents()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='container'>
            <h4 style={{ paddingTop: '2rem' }}>All Students</h4>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Update</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, count) => (
                            <tr key={student._id}>
                                <th scope='row'>{count + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>
                                    {
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            type='button'
                                            onClick={() =>
                                                handleShow(student._id)
                                            }
                                        />
                                    }
                                </td>
                                <td>
                                    {
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                            onClick={() =>
                                                deleteStudent(student._id)
                                            }
                                            type='button'
                                        />
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='container' style={{ padding: '2rem' }}>
                        <div className='mb-3'>
                            <label className='form-label'>Student Name</label>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                //onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Student Age</label>
                            <input
                                type='text'
                                className='form-control'
                                id='age'
                                //onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Student Gender</label>
                            <input
                                type='text'
                                className='form-control'
                                id='gender'
                                //onChange={(e) => setGender(e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AllStudent
