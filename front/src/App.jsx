import Home from './views/Home/Home'
import NavBar from "./components/NavBar/NavBar"
import Appointments from './views/Appointments/Appointments'
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import { Routes, Route } from "react-router-dom"
import { Schedule } from './views/Schedule/Schedule'
//import { useSelector } from 'react-redux'

function App() {

//const todos = useSelector((state) => state.todos);

  return (
    <div>
      <NavBar />
      <div style={{marginTop: "300px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
