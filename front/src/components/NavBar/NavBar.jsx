import style from './NavBarStyle.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavBar() {

  const { userData } = useSelector(state => state.user)

  return (
    <>
    <nav className={style.nav}>
      <div className={style.div}>
        <img src="" alt="" />
        <h2>FitZone</h2>
        <img src="" alt="" />
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {!userData.login ? null :
        (<li>
          <Link to="/appointments">Reservas</Link>
        </li>)}
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contactos</Link>
        </li>
        {!userData.login ? 
        (<li>
          <Link to="/register">Registro</Link>
        </li>) : null
        }
        {!userData.login ? 
        (<li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>) : null
        }
        {userData.login ? (<li>
          <Link to="/schedule">Agendar turno</Link>
        </li>) : null 
        }
        
      </ul>
    </nav>
    </>
  )
}

