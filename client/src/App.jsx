import './App.css'
import Register from './page/NavbarPege/Register'
import {Route, Routes} from 'react-router-dom'

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )

}

export default App
