import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Formulario from './pages/Formulario';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Index from './pages/Index';
import Usuarios from './pages/Usuarios';
import Atas from './pages/Atas';
import Administrador from './pages/Administrador';
import Menu_Administrador from './pages/Menu_Administrador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/cadastro" component={Cadastro}></Route>
                <Route path="/formulario" component={Formulario}></Route>
                <Route path="/menu" component={Menu}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/administrador/usuarios" component={Usuarios}></Route>
                <Route path="/administrador/atas" component={Atas}></Route>
                <Route path="/menuadministrador" component={Menu_Administrador}></Route>
                <Route path="/administrador" component={Administrador}></Route>
                


            </Switch>
        </BrowserRouter>
    )
}