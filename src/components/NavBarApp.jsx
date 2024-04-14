import React from 'react'
import { Link, NavLink} from 'react-router-dom'
export const NavBarApp = () => {
  const navBarStyle = {
    backgroundColor: '#A4CAFC',
  };
  return (
    <>
        <nav className="navbar navbar-expand-lg " style={navBarStyle}>
            <div className="container-fluid" >
                <NavLink to='/' className="navbar-brand" >Perfil</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to='/contacto' className="nav-link active" aria-current="page" >Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/formacion' className="nav-link" >Formación</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/portafolio' className="nav-link" >Portafolio</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/experiencia' className="nav-link disabled" aria-disabled="true">Experiencia</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
