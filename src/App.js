import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import {Router, Link, Route, Routes} from 'react-router-dom'

function App() {


  return(
   <>
    <Router>
      <Link to = '/' className = 'btn btn-dark'>
        INICIO
      </Link>

      <Link to = '/about' className = 'btn btn-dark'>
        ABOUT
      </Link>

    <Routes>
      <Route path = '/about'>
        <About />
      </Route>

      <Route path = '/' exact >
        <Home />
      </Route>

    </Routes>

    </Router>
    
   </>
  
    )
  }

export default App;
