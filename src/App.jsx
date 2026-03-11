import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import React from 'react';
import Nav from'./Nav.jsx'
import About from './about.jsx'



function App() {
  const  [page, setPage] = useState("about");
  return (
    <>
      <Nav setPage = {setPage}/>
      {page === "about" && <About />}
    </>
  )
}

export default App
