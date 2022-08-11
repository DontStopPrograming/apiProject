import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function App() {


  return(
   <>
    <Router>
      <Link to = "/" className = 'btn btn-dark'>
        INICIO
      </Link>

      <Link to = "/about" className = 'btn btn-dark'>
        ABOUT
      </Link>

      <Routes>
        <Route path = "/about" element = {About} >
        
        </Route>

        <Route path = "/" element = {Home} exact >
        
        </Route>

      </Routes>

    </Router>
    
   </>
   
    )
  }

export default App;
