import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <center>
      <h1 className='head'>Count Your Moments</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button className="button" onClick={() => {setCount(count+1)}}>+</button>
        <button className="button" onClick={() => {setCount(0)}}>RESET</button>
        <button className="button" onClick={() => {
          if(count>0){
            setCount(count-1);
          }
        }}>-</button>
      </div>
    </center>
    </div>
  )
}

export default App
