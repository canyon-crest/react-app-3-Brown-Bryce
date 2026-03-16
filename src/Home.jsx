import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import React from 'react';
import Nav from'./Nav.jsx'
import About from './About.jsx'

function Home(){
    return ( 
        <>
    <p> Welcome to my homepage about physics</p>
    <div>
    <Card name = "Distance Unit" food = "Meter"/>
    <Card name = "Velocity Unit" food = "Meter/Second"/>
    <Card name = "Acceleration Unit" food = "Meter/Second^2"/>
</div>
</>
    )
}
export default Home
