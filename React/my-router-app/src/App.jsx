import React from "react";
import HomePage from "./Homepage";
import AboutPage from "./AboutPage";

//React-Router
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
    
     <nav>
      <Link to="/" >Home</Link>

      <Link to="/about" >About</Link>
     </nav>


    <Routes>

     <Route path="/"     element={<HomePage />  }   />
     
     <Route path="/about"  element={<AboutPage />}  />

     </Routes>
    
    
    </BrowserRouter>
  )
}

export default App