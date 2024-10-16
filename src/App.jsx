import { useState } from 'react'
import Formulario from './components/Formulario'
import Bienvenido from './components/Bienvenido'
import Sesion from './components/Sesion'
function App() {
  const [user, setUser] = useState([])

  return (
    <>
      {
        !user.length > 0
          ? <Sesion setUser={setUser} />
          : <Bienvenido user={user} setUser={setUser} />
      }
      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <Bienvenido user={user} setUser={setUser} />
      }

    </>
  )
}

export default App
