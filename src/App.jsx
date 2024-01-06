import React from 'react'

import'./app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './mainnavbar/Topbar';
function App() {
  return (
   <>
   <Router>
    <Topbar />
    <Routes>
      <Route path='/'/>
    </Routes>
   </Router>
   </>
  )
}

export default App
