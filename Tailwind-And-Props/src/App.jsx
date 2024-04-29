import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='bg-green-300 text-black p-4 rounded-xl m-6' >
      Hello world!
    </h1>
   <Card userName="hitesh" />
   <Card userName="Neeraj" />

    </>
  )
}

export default App
