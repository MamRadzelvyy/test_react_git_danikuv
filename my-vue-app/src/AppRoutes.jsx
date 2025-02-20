import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Info from './pages/Info/Info'

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
