//example 1: Connection Js and HTML

// import React from "react";
// import AddToCart from "./addtocart";



// function App(){
//   //Js

//   let name = "Rifa"

//   function greet(){
//     alert('Hello Good Evening')
//   }

//   return(
//     //Html
//     <div>
//           <h2>My Name is  {name}  </h2>
           

//           <button onClick={greet}>Greet</button>

//           <AddToCart  />

          
//           <AddToCart  />


          
//           <AddToCart  />

          
//           <AddToCart  />


          
//           <AddToCart  />


          
//           <AddToCart  />


          
//           <AddToCart  />


          
//           <AddToCart  />



          
//           <AddToCart  />

//     </div>
//   )

// }
// export default App


//Variables in React- Example 1

// import React from "react";

// function App(){

//  let count = 10

//  function IncreaseCount(){
//   count = count + 1
//   console.log(count)
//  }

//   return(
//      <>
     

// <h2>Like/Cart/Quantity : {count}  </h2>

// <button onClick={IncreaseCount}>Increase </button>
     
//      </>
//   )
// }
// export default App

// useState - IT IS A SPECIAL REACT VARIABLE AND KNOW AS HOOK
// IT STORES THE UPDATED VALUE AND ALSO UPDATE DATA/VALUE ON THE UI/SCREEN

//SYNTAX - const [MainVariableName-show on screen , setVaribaleName- Updated value] = useState(Inital Value)

// import React from "react";
// import { useState } from "react";

// function App(){

//  const [like , setLike] = useState(16)

 
//  function IncreaseCount(){
//      setLike(like + 1)
//   console.log(like)
//  }

//   return(
//      <>
     

// <h2>Like/Cart/Quantity : {like}  </h2>

// <button onClick={IncreaseCount}>Increase </button>
     
//      </>
//   )
// }
// export default App



//Examplle 3

import React from "react";
import { useState } from "react";

function App(){



 const [show,setShow] = useState(false)
 
 

  return(
     <>
     


    <input type={show ? "text" : "password"}   placeholder="Enter Your Password"  />

    <button onClick={ ()=> setShow(!show) }>Show/Hide</button>
     
     </>
  )
}
export default App



