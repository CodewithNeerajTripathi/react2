import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    if(counter==0){
     setCounter(counter)
    }
    else{
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>neeraj tripathi</h1>
    <h2>neeraj tripathi:{counter} </h2>
    <button onClick={addValue}>ADD value{counter}</button>
    <br />
    <button onClick={removeValue}> Remove Value{counter}</button>
    </>
  )
}

export default App
