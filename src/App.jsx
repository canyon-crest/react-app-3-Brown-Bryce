import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import React from 'react';
import Nav from'./Nav.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import New from './new.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'



function App() {
  const  [page, setPage] = useState("Home");
  return (
    <>
      <Nav setPage = {setPage}/>
      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
      {page === "New" && <New />}
      <Footer />
    </>
  )
}

export default App
