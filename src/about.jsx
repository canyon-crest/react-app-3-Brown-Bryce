import { useState } from 'react'
import './about.css'



function About() {
  const [apiData, setApiData] = useState('');
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData(data.message); // "message" contains the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };
  
  return(
    <>
  <h1>This is my about page</h1>
  <p>About me: I like physics... so here are some equations</p>
  <p>F=MA </p>
  <p>w=Mg</p>
  <p>P=Mv</p>
  <p>W=Fdcos(theta)</p>
  <button onClick={fetchDogImage}>Fetch Dog Image</button>
{apiData && <img src={apiData} alt="Random Dog" />}
  </>
  )
}

export default About
