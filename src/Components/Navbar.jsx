import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme} = useGlobalStates()
  console.log(theme)
  return (
    <nav className="nav" id={theme.background}>
      <p className='p_nav'>DH Odonto</p>
      <div>
      <Link to={"/"} className="linkNav" id={theme.id}>Home</Link>
      <Link to={"/Contact"} className="linkNav"id={theme.id}>Contact</Link>
      <Link to={"/Favs"} className="linkNav"id={theme.id}>Favs</Link>
      
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='darkmode' onClick={changeTheme}>{theme.background ? 'Mode 🌞' : 'Mode 🌚'}</button>
      </div>
    </nav>
  )
}

export default Navbar