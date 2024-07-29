import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Form } from './components/form'
import Home from './components/home'
import { Navbar } from './components/navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Form />}/>
      </Routes>
       
    </>
  )
}

export default App
