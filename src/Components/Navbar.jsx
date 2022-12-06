import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='nav'>
      <p className='p_nav'>DH Odonto</p>
      <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Favs"}>Favs</Link>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='noche'>Mode</button>
      </div>
    </nav>
  )
}

export default Navbar