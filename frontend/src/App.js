import { Route, Routes } from 'react-router-dom'

import AddStudent from './components/AddStudent'
import AllStudent from './components/AllStudent'
import EditStudent from './components/EditStudent'
import Header from './components/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/student/add' element={<AddStudent />} />
                <Route path='/student' element={<AllStudent />} />
                <Route path='/student/update/:id' element={<EditStudent />} />
            </Routes>
        </div>
    )
}

export default App
