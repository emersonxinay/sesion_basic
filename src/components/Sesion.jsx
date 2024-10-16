/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Formulario.css';

// Datos de usuario simulados
const USERS = [
  { username: 'usuario1', password: 'contraseña1' },
  { username: 'usuario2', password: 'contraseña2' },
];

function Sesion({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    const user = USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setError(false);
      setUser(username);
    } else {
      setError(true);
      setErrorMessage("Credenciales inválidas");
    }
  };

  return (
    <>
      <h1>Iniciar sesión</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Nombre de usuario"
          name="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p className="error-message">{errorMessage}</p>}
    </>
  );
}

export default Sesion;