/* eslint-disable react/prop-types */
function Bienvenido({ user, setUser }) {
  // función para salir
  const cerrarSesion = () => {
    setUser([])
  }
  return (
    <>
      <h1>Bienvenido</h1>
      <h2>Hola  {user}</h2>
      <button onClick={cerrarSesion} >Cerrar Sesión</button>
    </>
  )
}
export default Bienvenido;