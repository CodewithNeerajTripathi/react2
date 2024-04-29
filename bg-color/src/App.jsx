import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200' 
    style={{backgroundColor: Color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-3 rounded-3xl'>

          <button onClick={()=> setColor("red")}className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}>red</button>

           <button onClick={()=> setColor("green")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}>green</button>

           <button onClick={()=> setColor("yellow")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "yellow"}}>yellow</button>

           <button onClick={()=> setColor("blue")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}>blue</button>

          <button onClick={()=> setColor("pink")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "pink"}}>pink</button>

          <button onClick={()=> setColor("violet")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "violet"}}>violet</button>

          <button onClick={()=> setColor("palegreen")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "palegreen"}}>palegreen</button>

          <button onClick={()=> setColor("brown")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "brown"}}>brown</button>
        </div>
      </div>

   </div>
  )
}

export default App
