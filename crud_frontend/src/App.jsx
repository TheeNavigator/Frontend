import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
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
          <Route exact path="/edituser/:userId" element={<EditUser/>} />
          <Route exact path="/viewuser/:userid" element={<ViewUser />} />
        </Routes>
        
      </Router>

    </>
  )
}

export default App
