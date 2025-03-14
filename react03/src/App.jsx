import React, { useState } from 'react'
import './App.css'
const App = () => {
    const [counter, setcounter] = useState(0);
    const [bgcolor, setbgcolor] = useState("white");

    const increment = () => {
        setcounter(counter=>counter+1);
    }
    const decrement = () => {
        setcounter(counter=>counter-1);
        if(counter == 0){
            setcounter(0);
        }
    }

    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"];

    const changecolor = (color) => {
        document.querySelector("body").style.backgroundColor = color;
        document.querySelector("body").style.color = "black";
    }

  return (
    <div className='main'>
    <div className='counter'>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    <div className='color-section'>
        {colors.map((color,index)=>{
            return (
                <span key={index} className='{color}' onClick={()=>changecolor(color)} style={{color: color , backgroundColor: color, padding: "10px",boxShadow: "0 0 10px 10px #222"}}></span>
            )
        })}
    </div>
    </div>

  )
}

export default App
