import React, { Component, useState } from 'react'

import UserService from '../../service/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        }); 
    }

    render(){
        return (
            <div>
                <div>
                    <h1 className = "text-center">User List</h1>
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                                <td>ID:</td>
                                <td>Email:</td>
                                <td>Nome:</td>
                                <td>Usuario:</td>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.login}</td>  
                                </tr>    
                            )
                        }
                    </tbody>

                    </table>
                </div>
            </div>

        )
    }
}
export default UserComponent
