import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
   

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/contact' element={<Contact/>}/>        
        <Route path='/login' element={<Login/>}/>        
        <Route path='/register' element={<Register/>}/>        
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
