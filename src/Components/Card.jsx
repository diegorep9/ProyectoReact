import React from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="doctorsito" width='200px'/>
      <p>{<Link to={"/Detail"} className="nombre-odonto">{name}</Link>}</p>
      <p className="user-odonto">{username}</p>
      

        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
