import './Card.css';
import { useState } from 'react'
function Card({name, food}){

    const [count, setCount] = useState(0);
    return(
        <div className='myCard'>
            <p className='rainbow_text_animated'>{name}</p>
            <p className='rainbow_text_animated'> Food: {food}</p>   
            <button onClick={() => setCount(count+1)}>Add {food} to cart</button> 
            <button onClick={() => setCount(0)}>Reset</button>  
            <p>Total {food}: {count}</p>  
        </div>
    )
}

export default Card