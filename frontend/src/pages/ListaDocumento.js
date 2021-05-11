import React, { useState } from 'react'
import "../assets/css/style.css"

import Menu from './Menu';

function ListaDocumento() {
    return (
        <div>
            <div><Menu/></div>
            <div className="container">
                <div className="card shadow" style={{margin:'5%'}}>
                    | id | tema(?) | btn-aprovar | btn-visualizar | btn-excluir |
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
        
    )
}

export default ListaDocumento