import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import {Routes,Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <>
    {/* <Home />
    <Courses/>
   */}
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/Courses' element={<Courses/>}></Route>
   <Route path='/Contact' element={<Contact/> }></Route>
   <Route path='/SignUp' element={<Signup/>}></Route>
   </Routes>


    </>
  )
}

export default App
