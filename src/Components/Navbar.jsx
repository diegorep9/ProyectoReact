import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const cambio = () => {

  }

  return (
    <nav className='nav'>
      <p className='p_nav'>DH Odonto</p>
      <div>
      <Link to={"/"} className="linkNav">Home</Link>
      <Link to={"/Contact"} className="linkNav">Contact</Link>
      <Link to={"/Favs"} className="linkNav">Favs</Link>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='darkmode' onClick={cambio()}>Mode</button>
      </div>
    </nav>
  )
}

export default Navbar