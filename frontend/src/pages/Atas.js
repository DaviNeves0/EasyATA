import React, { Component, useState } from 'react'
import "./style.css"

import AtasComponent from './components/AtasComponent';

import Menu from './Menu';  


function Atas(){
    return(
        <div>
            <Menu/>
            <AtasComponent/>
        </div>
    )

}
export default Atas
