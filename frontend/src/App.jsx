import react from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from "./pages/NotFound.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Homepage/>}
        />

        <Route 
          path="/register" 
          element={<Register/>}
        />

        <Route 
          path="/login" 
          element={<Login/>}
        />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
