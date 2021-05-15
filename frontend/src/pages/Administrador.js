import React, { useState } from 'react'
import "../assets/css/style.css"

import Menu from './Menu';

function Administrador() {
    return (
        <div>
            <div><Menu/></div>
            <div className="container">
                <div className="card shadow" style={{margin:'5% 25% 0', width: '50%'}}>
                    <div className="card-header">
                        <h4>Painel de controle</h4>        
                    </div>  
                    <div class="row" style={{padding: '10px 20% 10px'}}>
                        <div class="col">
                            <a href="/administrador/usuarios" class="btn btn-dark" style={{display: 'block'}} role="button" aria-pressed="true">Usuários Cadastrados</a>
                        </div>
                    </div>                      
                </div>  
            </div>
        </div>
        
    )
}

export default Administrador