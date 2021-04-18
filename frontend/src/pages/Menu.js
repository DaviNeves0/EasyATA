import React, { useState } from 'react'
import "./menu.scss"

function Menu() {
    return (
      <header className="header">
      <div className="container">
        <div className="wrapper">
          <h1 className="logo">EAs</h1>
          <a className="nav-toggle">
             <span className="toggle"></span>
             <span className="toggle"></span>
             <span className="toggle"></span>
          </a>
        </div>
        <nav className="navbar" style={{float: 'right'}}>
          <ul className="nav-menu">

            <li className="nav-item"><a href="/index">Inicio</a></li>
            
            <li className="nav-item"><a href="/formulario">Cadastrar ATA</a></li>

            <li className="nav-item"><a href="/administrador">Administrador</a></li>
     
            <li className="nav-item"><a href="#">Gerar Modelo</a></li>

            <li className="nav-item"><a href="/">Sair</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Menu