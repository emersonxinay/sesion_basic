/* eslint-disable react/prop-types */
import './Formulario.css'
import { useState } from 'react';

function Formulario({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState(false);
  const enviarAccion = (e) => {
    e.preventDefault()
    if (nombre === "" || correo === "") {
      setError(true)
      return
    }
    setError(false)
    setUser([nombre])
  }
  return (
    <>
      <h1>Iniciar sesión</h1>
      <form action="" className="formulario" onSubmit={enviarAccion} >
        <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="nombre" name="nombre" />
        <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" name="email" id="" placeholder="correo" />
        <button type='submit' >Iniciar Sesión</button>
      </form>
      {error && <p> Todos los campos son obligatorios </p>}
    </>
  )
}
export default Formulario;