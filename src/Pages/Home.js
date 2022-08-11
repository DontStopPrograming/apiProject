import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {

const [valor, setValor] = useState([])
  const [search, setSearch] = useState('')
  //  const [modif, setModif] = useState({
  //    nombre: ''
    
  //  })

  
  const apiMostrar = async() => {
    const data = await fetch('https://pixabay.com/api/?key=27058290-ee9b8ab8787754e59d4d4e22e&q=cafe&per_page=10')
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
    <div>
  <div className="navbar bg-light">
    <div className="container-fluid">
    
      <input type="search" value = {search} placeholder="busca tu imagen" onChange = {handleChange}  aria-label="Search"  /> 
      <button className="btn btn-outline-success" type="submit" onClick = {handleClick} >Search</button>
    
    </div>
  </div>

   <br /><br />

    <div>
      <ul>
            { 
        results.map( item => ( 
        <li key = {item.id}> 
            <Link to = {`/about/${item.id}`}>
            
            {item.type} - {item.imageURL}
            </Link>
        </li>
        ))
        }
        </ul>

        <h1> ESTE ES EL HOME</h1>

    </div>
        
   </div>
  )
    }

export default Home