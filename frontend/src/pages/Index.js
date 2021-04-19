import React, { useState } from 'react'
import "./style.css"

import Menu from './Menu';

function Index() {
    return (
        <div>
            <Menu/>
            <div className="container" style={{margin:'2%'}}>
                    <h2>Bem vindo ao EasyATA </h2>                    
            </div>
        </div>
    )
}

export default Index