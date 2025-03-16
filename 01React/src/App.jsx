import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className="navbar">
        <h1 id="logo">DCN</h1>
        <ul className='nav-links'>
          {["home","about","service","contact","signup/login"].map((item, index, array)=>{
            return (
              <li key={index} id={item.toLowerCase().replace("/","-")} className={index == array.length-1 ? "registration": ""}>
              {item}
              </li>
            )            
          })}
        </ul>
      </div>
      <div className="animation">
        <div className="ractangle"></div>
      </div>
    </>
  )
}

export default App
