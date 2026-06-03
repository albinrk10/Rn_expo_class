import './App.css'
import type { Usuario } from './types/Usuarios'
import { UserCard } from './components/UserCard'


function App() {
   const usuario:Usuario={
    id:1,
    nombre: 'Albin',
    edad: 29,
    rol: 'Docente',
    activo : false

   }
   return (
    <main
    style={{
      minHeight:'100vh',
      display:'grid',
      placeItems: 'center',
      padding:16,
      boxSizing:'border-box'
    }}
    >
      <section>
        <UserCard user={usuario} ></UserCard>
      </section>

    </main>
   )
}

export default App
