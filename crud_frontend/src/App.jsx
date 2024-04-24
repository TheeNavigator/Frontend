import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'

function App() {

  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/adduser' element={<AddUser/>} />
          <Route exact path="/edituser/:id" element={<EditUser/>} />
        </Routes>
        
      </Router>

    </>
  )
}

export default App
