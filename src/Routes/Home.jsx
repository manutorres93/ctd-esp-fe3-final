import React from "react";
import Card from "../Components/Card";
import "../styles/Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // Lista de odontólogos
  const odontologos = [
    { id: 1, name: "Dr. Ana Pérez", username: "ana.perez" },
    { id: 2, name: "Dr. Juan Martínez", username: "juan.martinez" },
    { id: 3, name: "Dra. Sofía Gómez", username: "sofia.gomez" },
    { id: 4, name: "Dr. Luis Rodríguez", username: "luis.rodriguez" },
    { id: 5, name: "Dr. Carlos Jiménez", username: "carlos.jimenez" },
  ];

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Renderizamos las cards */}
        {odontologos.map((odontologo) => (
          <Card
            key={odontologo.id}
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
