import React, { useEffect, useState } from  'react'
import './App.css';

function App() {
  const [valor, setValor] = useState([])
  const [search, setSearch] = useState({
    nombre: ''
  })
  
  const apiMostrar = async() => {
  const data = await fetch('https://pixabay.com/api/?key=27058290-ee9b8ab8787754e59d4d4e22e&q=cafe&per_page=10&')
  const docJson = await data.json()
    
    console.log(docJson)
    setValor(docJson)
    setValor(data)
  }

  useEffect(() =>{
    apiMostrar()
  }, [])

  const handleClick = (e) => {
    console.log('CLICK')
    
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })

  }

  return(
    <>
  <div className="navbar bg-light">
    <div className="container-fluid">
    
      <input type="search" placeholder="busca tu imagen" onChange = {handleChange}  aria-label="Search" name = 'nombre'/> 
      <button className="btn btn-outline-success" type="submit" onClick = {handleClick} >Search</button>
      
    </div>
  </div>
    <h3> {search.nombre} - </h3>
    </>
  )
}
export default App;
