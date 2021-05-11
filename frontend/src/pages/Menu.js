import React, { useState } from 'react'
import "../assets/css/menu.scss"

function Menu() {
    function handleSair(){
      localStorage.clear();
    }

    var perfil = localStorage.getItem('perfil').replace(/['"]+/g, '');

    var perfilOnline;
    if (perfil == "Usuário"){
        perfilOnline = false;
    }
    if (perfil == "Admin"){
      perfilOnline = true;
    }
    
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
            <li className="nav-item"><a href="/index">Início</a></li>
            
            <li className="nav-item"><a href="/formulario">Cadastrar ATA</a></li>

            <li className="nav-item"><a href="/listaDocumento">Lista de ATAs</a></li>

            {perfilOnline && <li className="nav-item"><a href="/administrador">Administrador</a></li>}
            
            <li className="nav-item"><a href="/" onClick={handleSair}>Sair</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Menu