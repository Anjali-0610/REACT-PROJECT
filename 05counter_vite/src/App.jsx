import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter=7
  let [counter,change_counter]=useState(7);

  const addValue=function (){

    if(counter!=20){
    counter+=1;
    change_counter(counter);
    console.log("new value  "+counter)
    }
    else{
      console.log("cant go beyond 20"+Math.random())
    }
  }
  const decrease_Value=function (){

    if(counter!=0){
    counter-=1;
    console.log("new value  "+counter)
    change_counter(counter);
    }
    else{
      console.log("can't go below zero"+Math.random())
    }
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
