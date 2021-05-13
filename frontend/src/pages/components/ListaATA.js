import React, { forwardRef} from 'react'

import MaterialTable from 'material-table'
import AtasService from '../../service/AtasService';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const tableIcons = {
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };


class ListaATA extends React.Component{

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
            <MaterialTable
            icons={tableIcons}
            title="Atas Cadastradas"
            columns={[
                { title: 'ID', field: 'id'},
                { title: 'Tema', field: 'tema' },
                { title: 'Pauta', field: 'pauta' },
                { title: 'Data Início', field: 'data_inicio'},
                { title: 'Data Fim', field: 'data_fim' },
                { title: 'Horário Início', field: 'hora_inicio' },
                { title: 'Horário Fim', field: 'hora_fim'},
                { title: 'Local', field: 'local'},
              ]}
              data={this.state.atas}
            />
        )
    }
}
export default ListaATA
