import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'  // For design
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Register from './components/register.jsx'
import Login from './components/login.jsx'
import Home from './components/home.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div>
    //   <Signup />  {/* Lowercase tags are treated as standard HTML tags, uppercase- React components */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to= '/register' /> } />  {/* Redirect root to /register */}

        <Route path='/register' element={ <Register /> } />  {/* http://localhost:5173/register */}
        <Route path='/login' element={ <Login /> } />
        <Route path='/home' element={ <Home /> } />

        <Route path='*' element={ <Navigate to= '/register' /> } />  {/* Fallback route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App