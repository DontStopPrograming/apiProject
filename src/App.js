import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Inicio from './Pages/Inicio'
import './App.css';


function App() {
  return(
    <>
      <Router>
        <div className = 'contenedor'>
          <Link to = '/' className = 'btn btn-dark'>
            INICIO
          </Link>

          <Link to = '/about' className = 'btn btn-dark'>
            ABOUT
          </Link>

          <NavLink to = '/contact' className = 'btn btn-dark' activeClassName = 'active'>
            CONTACT
          </NavLink>

        </div>

        <Routes>
          <Route path = '/contact'>
            <Contact />
          </Route>

          <Route path = '/about'>
            <About />
          </Route>

          <Route path = '/' exact>
            <Inicio />
          </Route>

        </Routes>
        
      </Router>
    </>
    )
  }

export default App;
