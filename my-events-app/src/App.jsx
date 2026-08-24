// import React from "react";

// function App(){

// function greet(){
//   alert('Good eve welcome To User')
// }

// return(
//   <button onClick={greet}>
// Click Me
//   </button>
// )

// }

// export default App



//Input - change in Input Value

import React from "react";

import { useState } from "react";

function App(){

  const [text, setText] = useState("")

  return(
    <>
    <input 
    type="text"
    placeholder="Searchh..."
     
    onChange={ (e)=>  setText(e.target.value) }


    />

    <h2>You Typed : {text}</h2>
    </>
  )
}
export default App