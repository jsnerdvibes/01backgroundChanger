import { useState } from 'react'
function App() {

  const [color,setColor]=useState("grey")


  return (
    <>
      <div style={{backgroundColor:color}} className='buttonArea' >
        <button className='btn' onClick={()=>{setColor("red")}}>Red</button>
        <button className='btn' onClick={()=>{setColor("blue")}}>Blue</button>
        <button className='btn' onClick={()=>{setColor("green")}}>Green</button>
        <button className='btn' onClick={()=>{setColor("Orange")}}>Orange</button>
        <button className='btn' onClick={()=>{setColor("pink")}}>pink</button>
        <button className='btn' onClick={()=>{setColor("Black")}}>Black</button>
      </div>
    </>
  )
}

export default App;