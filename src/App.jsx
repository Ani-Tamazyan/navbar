import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"

import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>     
     
    </div>
  )
}

export default App
