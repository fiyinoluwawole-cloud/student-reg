import React from 'react'
import Hello from './components/Hello'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Footer } from './components/Header'
import Landingpage from './pages/Landingpage'
import { Newcomponent } from './components/Newcomponent'
import {Todo} from './components/todo'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <div>
    {/* <Landingpage/> */}
    {/* <Newcomponent/> */}
    {/* <Todo/> */}
    {<Dashboard/>}
    </div>
  )
}

export default App