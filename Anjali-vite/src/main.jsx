import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyAPP(){
    return (
      <div>
        <h1>creating a function named myAPP</h1>
      </div>
    )
}


const ReactElement ={
  type:'a',       /*teels th etype of element i.e anchor tag here*/
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}

const anotherElement=(
  <h1>
   <a href="https://google.com" target='_blank'>
    correct way to give the structure to be added
  </a>
  </h1>
 
)

const new_var_react='react ki method mein variable bhi inject kara'
const new_react_element=React.createElement(
  'a',
  {
    href:'https://google.com', target:'_blank'
  }
  ,<h1>react  ko usi ke syntax mein element kacontent diya hai</h1>,
  new_var_react
)

createRoot(document.getElementById('root')).render(

// {/* <App/> */}
/*MyApp()*/
/*<MyAPP/>*/
/*ReactElement       object hai esliye brackets ke saath call nahi hoga*/
// anotherElement
new_react_element       //react ke method se hi content dena
  
)


