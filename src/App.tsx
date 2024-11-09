import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`sphere ${flipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="sphere-front">
            <img
              src="/assets/Irina.jpg"
              alt="Profile"
              className="sphere-image"
            />
          </div>
          <div className="sphere-back">
            <form className="login-form">
              <h2>Iniciar Sesión</h2>
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
              <button type="submit" className="primary-button">
                Entrar
              </button>
              <div className="extra-options">
                <button type="button" className="forgot-password">
                  ¿Olvidaste tu contraseña?
                </button>
                <button type="button" className="register">
                  Regístrate
                </button>
              </div>
            </form>
          </div>
        </div>
        <h1 className="App-title">AgendaFlow</h1>
      </header>
    </div>
  );
};

export default App;
