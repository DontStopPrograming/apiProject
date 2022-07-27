import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
function About() {

const [valor, setValor] = useState([])
  const [search, setSearch] = useState('')
  //  const [modif, setModif] = useState({
  //    nombre: ''
    
  //  })
  
  const apiMostrar = async() => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const Json = await data.json()
      setValor(Json)
      console.log(Json)
      

  }
    

  useEffect(() =>{
    apiMostrar()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    console.log('CLICK')
    
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)

  
  }

  const results = !search ? valor : valor.filter(resul => resul.name.toLowerCase().includes(search.toLowerCase()))



  return(
    <>
  <div className="navbar bg-light">
    <div className="container-fluid">
    
      <input type="search" value = {search} placeholder="busca tu imagen" onChange = {handleChange}  aria-label="Search"  /> 
      <button className="btn btn-outline-success" type="submit" onClick = {handleClick} >Search</button>
    
    </div>
    </div>
    <br /><br />

    <ul>
        { 
        results.map( item => ( 
            
            <li key={item.id}> 
              <Link to = {`/about/${item.id}`} > 
                {item.name} - {item.expansion}
              </Link>
            </li>
            
            
        ))
        }
    </ul>
   
   

   </>
  )
    }

export default About