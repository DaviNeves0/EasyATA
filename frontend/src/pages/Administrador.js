import React, { useState } from 'react'
import "./style.css"

import Menu_Administrador from './Menu_Administrador';

function Administrador() {
    return (
        <div>
            <div><Menu_Administrador/></div>
            <div className="container"></div>
            <div className="card shadow" style={{margin:'5%'}}>
                <a href="/administrador/usuarios" class="btn btn-light" role="button" aria-pressed="true">Usuarios</a>
                <a href="/administrador/atas" class="btn btn-light" role="button" aria-pressed="true">Atas</a>
            </div>
        </div>
        
    )
}

export default Administrador