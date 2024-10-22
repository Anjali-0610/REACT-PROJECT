import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter=7
  let [counter,change_counter]=useState(7);

  const addValue=function (){
    counter+=1;
    change_counter(counter);
    console.log("new value  "+counter)
  }
  const decrease_Value=function (){
    counter-=1;
    change_counter(counter);
    console.log("new value  "+counter)
  }

  return (
    <>

      <h1>React 05</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>add value</button>
       <br/>
      <button onClick={decrease_Value}>decrease value</button>
    </>
  )
}

export default App
