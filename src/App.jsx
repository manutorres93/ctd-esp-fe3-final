import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext"; 

const App = () => {
  const { state, toggleTheme } = useContext(GlobalContext); 

  return (
    <div className={state.theme}>
      <Router>
        <Navbar />
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            background: state.theme === "light" ? "#333" : "#fff",
            color: state.theme === "light" ? "#fff" : "#000",
          }}
        >
          Cambiar a {state.theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
