import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ name, username, id }) => {
  const { state } = useContext(GlobalContext);
  // Lógica para agregar al localStorage
  const addFav = () => {
    // Obtenemos los favoritos actuales del localStorage
    const currentFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verificamos si el odontólogo ya está en favoritos
    if (!currentFavs.some((fav) => fav.id === id)) {
      // Si no está, lo agregamos y actualizamos el localStorage
      const updatedFavs = [...currentFavs, { name, username, id }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      alert(`${name} agregado a favoritos!`);
    } else {
      alert(`${name} ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      {/* Mostramos la información del odontólogo */}
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      {/* Link hacia la página de detalle */}
      <Link to={`/dentist/${id}`} className="detail-link">
        Ver detalles
      </Link>

      {/* Botón para agregar a favoritos */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
