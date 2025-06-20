import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] =useState(15)

  const addValue=()=>{
    setCounter(prevCounter=> prevCounter +1)
  }
  const removeValue =()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur creact</h1>
      <h2>counter value : {counter}</h2>

      <buttom
      onClick={addValue}
      >Add value {counter}</buttom>
      <br/>
      <buttom
      onClick={removeValue}
      >remove value {counter}</buttom>
      <p>footer :{counter}</p>
    </>
  )
}

export default App
