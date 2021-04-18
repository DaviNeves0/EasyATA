import React, { Component, useState } from 'react'
import "./style.css"

import UserComponent from './components/UserComponent.js';

import Menu from './Menu';  


function Administrador(){
    return(
        <div>
            <Menu/>
            <UserComponent/>
        </div>
    )

}
export default Administrador
