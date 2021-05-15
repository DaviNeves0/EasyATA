import React from 'react'

import AtasService from '../../service/AtasService';

class AtasComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            atas: []
        }
    }

    componentDidMount(){
        AtasService.getAtas().then((response) => {
            this.setState({ atas: response.data})
        }); 
    }

    render(){
        return (
            <div className="container">
                <div className="card shadow" style={{margin:'5%'}}>
                <div className="card-header">
                    <h4>ATAs cadastrados</h4>        
                </div>
                <table className = "table table-striped">
                        <thead>
                            <tr>
                                <td>ID:</td>
                                <td>Tema:</td>
                                <td>Pauta:</td>
                                <td>Data Inicio:</td>
                                <td>Data Fim:</td>
                                <td>Horario Inicio:</td>
                                <td>Horario Fim:</td>
                                <td>Local:</td>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.atas.map(
                                atas =>
                                <tr key = {atas.id}>
                                    <td>{atas.id}</td>
                                    <td>{atas.tema}</td>
                                    <td>{atas.pauta}</td>
                                    <td>{atas.data_inicio}</td> 
                                    <td>{atas.data_fim}</td> 
                                    <td>{atas.hora_inicio}</td>  
                                    <td>{atas.hora_fim}</td>  
                                    <td>{atas.local}</td>
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
export default AtasComponent
