import React, { Component, useState } from 'react'
import { CSVLink } from "react-csv";
import "../assets/css/style.css"

import { Page, Text, View, StyleSheet, PDFDownloadLink, Document} from '@react-pdf/renderer';

import Popup from './components/Popup';
import api from "../service/api";

import Menu from './Menu';

export function Formulario() {

    const style = StyleSheet.create({
        page: {
            backgroundColor: '#fff',
            fontSize: '8pt'
        },

        textCenter: {
            width: '100%',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
        },

        header: {
            height: '80px',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            backgroundColor: 'grey',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',

            one: {
                backgroundColor: 'red',
                height: '100%',
                width: '30%',
                
            },
            two: {
                backgroundColor: 'green',
                height: '100%',
                width: '50%',
            },
            three: {
                backgroundColor: 'blue',
                height: '100%',
                width: '20%',
            }         
        },

        projeto: {
            height: '160px',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            backgroundColor: 'grey',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            
            one: {
                backgroundColor: 'red',
                height: '100%',
                width: '25%',
                
            },
            two: {
                backgroundColor: 'green',
                height: '100%',
                width: '25%',
            },
            three: {
                backgroundColor: 'blue',
                height: '100%',
                width: '25%',
            },
            four: {
                backgroundColor: 'purple',
                height: '100%',
                width: '25%',
            }  
        },

        projetoTitle: {
            height: '15px',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            backgroundColor: 'grey'
        },

        pauta: {
            height: '20px',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            backgroundColor: 'grey',
            textAlign: 'center',
            marginTop: '15px',

            one: {
                height: '25px',
                width: '80%',
                marginLeft: '10%',
                marginRight: '10%',
                backgroundColor: 'grey',
                textAlign: 'center',
            }
        },

        obs: {
            height: '50px',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            backgroundColor: 'grey',
            marginTop: '15px'
        }
        

    });

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={style.page}>
                <View style={style.header}>
                    <View style={style.header.one}>
                        <Text>ATA Nº.:</Text>                     
                    </View>
                    <View style={style.header.two}>
                        <Text>Data: {data_inicio} - {data_fim}</Text>
                        <Text>Início: {hora_inicio} Fim: {hora_fim}</Text>
                        <Text>Local: {local}</Text>
                    </View>
                    <View style={style.header.three}>
                        <Text>LOGO</Text>
                    </View>
                </View>
                
                <View style={style.textCenter}>
                    <Text>ATA DE REUNIÃO</Text>
                </View>

                <View style={style.projetoTitle}>
                    <Text>Projeto: {tema}</Text>
                </View>
                <View style={style.projeto}>
                    <View style={style.projeto.one}>
                        <Text>Participante(s):</Text>
                        <Text>{participante}</Text>                               
                    </View>
                    <View style={style.projeto.two}>
                        <Text>Área(s):</Text>
                        <Text>{area}</Text>                         
                    </View>
                    <View style={style.projeto.three}>
                        <Text>E-mail(s):</Text>
                        <Text>{email}</Text>                 
                    </View>
                    <View style={style.projeto.four}>
                        <Text>Telefone(s):</Text>
                        <Text>{telefone}</Text>                  
                    </View>
                </View> 

                <View style={style.pauta}>
                    <Text>PAUTA</Text>
                </View>
                <View style={style.pauta.one}>
                    <Text>{pauta}</Text>
                </View>

                <View style={style.obs}>
                    <Text>Observações:</Text>
                    <Text>1 – Deve ser disponibilizada cópia da Ata de Reunião para os participantes e envolvidos;</Text>
                    <Text>2 – O campo PRAZO define as datas de entrega das solicitações por parte dos responsáveis definidos no campo RESPONSÁVEL.</Text>
                </View>

                <Text>Assuntos: </Text>
                <Text>{assunto}</Text>
                <Text>Responsaveis: </Text>
                <Text>{responsavel}</Text>
                <Text>Prazos: </Text>
                <Text>{prazo}</Text>
                <Text>Distribuição: </Text>
                <Text>{distribuicao}</Text>
                <Text>Representantes: </Text>
                <Text>{representante}</Text>
                <Text>Nomes: </Text>
                <Text>{nome}</Text>
                <Text>Assinaturas: </Text>
                <Text>{assinatura}</Text>
            </Page>
        </Document>
    );
    
    const [buttonPopup, setButtonPopup] = useState(false);

    const headers = [
        { label: "Tema", key: "tema" },
        { label: "Pauta", key: "pauta" },
        { label: "Data_Inicio", key: "data_inicio" },
        { label: "Data_Fim", key: "data_fim" },
        { label: "Hora_Inicio", key: "hora_inicio" },
        { label: "Hora_Fim", key: "hora_fim" },
        { label: "Local", key: "local" },
        { label: "Participante", key: "participante" },
        { label: "Area", key: "area" },
        { label: "Email", key: "email" },
        { label: "Telefone", key: "telefone" },
        { label: "Assunto", key: "assunto" },
        { label: "Responsavel", key: "responsavel" },
        { label: "Prazo", key: "prazo" },
        { label: "Distribuicao", key: "distribuicao" },
        { label: "Representante", key: "representante" },
        { label: "Nome", key: "nome" },
        { label: "Assinatura", key: "assinatura" }

    ];

    const [tema, setTema] = useState("");
    const [pauta, setPauta] = useState("");
    const [data_inicio, setData_Inicio] = useState("");
    const [data_fim, setData_Fim] = useState("");
    const [hora_inicio, setHora_Inicio] = useState("");
    const [hora_fim, setHora_Fim] = useState("");
    const [local, setLocal] = useState("");
    const [participante, setParticipante] = useState("");
    const [area, setArea] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [prazo, setPrazo] = useState("");
    const [distribuicao, setDistribuicao] = useState("");
    const [representante, setRepresentante] = useState("");
    const [nome, setNome] = useState("");
    const [assinatura, setAssinatura] = useState("");

    const [data, setData] = useState([]);

    async function handleCadastrar(e){

        setData([...data, {tema, pauta, data_inicio, data_fim, 
            hora_inicio, hora_fim, local, participante, 
            area, email, telefone, assunto, responsavel, 
            prazo, distribuicao, representante, nome, assinatura}]);

        const dados = {
            tema, 
            pauta,
            data_inicio,
            data_fim,
            hora_inicio,
            hora_fim,
            local,
            participante,
            area,
            email,
            telefone,
            assunto,
            responsavel,
            prazo,
            distribuicao,
            representante,
            nome,
            assinatura
        };

        try{
        const response = await api.post('saveAta', dados);
        alert('Sucesso!')
        }catch(err){
            alert('Erro')
        }
    }

    return (
        <div>
            <Menu/>
            <div className="container">       
            
            <div className="card shadow" style={{margin:'5%'}}>
                <div className="card-header">
                    <h4>Formulário <small>da ATA</small></h4>        
                </div>
                <div className="card-body">
                    <form>                       
                            <div>
                                <div className="form-group row">
                                    <div className="col-2">Tema da Reunião:</div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" name="tema" id="tema"
                                         onChange={(e) => setTema(e.target.value)}  />       
                                    </div>  
                                    <div className="col-2">Pauta da Reunião:</div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" name="pauta"
                                         onChange={(e) => setPauta(e.target.value)}  />       
                                    </div>  
                                </div> 
                                <div className="form-group row">
                                    <div className="col-2">Data:</div>
                                    <div className="col-4">
                                        <input type="date" className="form-control" name="data_inicio" placeholder="Início" 
                                         onChange={(e) => setData_Inicio(e.target.value)} />       
                                    </div>  
                                    <div className="col-4">
                                        <input type="date" className="form-control" name="data_fim" placeholder="Fim" 
                                         onChange={(e) => setData_Fim(e.target.value)}/>       
                                    </div>  
                                </div>

                                <div className="form-group row">
                                <div className="col-2">Horário:</div>
                                    <div className="col-4">
                                        <input type="time" className="form-control" name="hora_inicio" placeholder="Início"  
                                        onChange={(e) => setHora_Inicio(e.target.value)} />       
                                    </div>  
                                    <div className="col-4">
                                        <input type="time" className="form-control" name="hora_fim" placeholder="Fim" 
                                        onChange={(e) => setHora_Fim(e.target.value)}/>       
                                    </div> 
                                </div>
                                <div className="form-group row">
                                    <div className="col-2">Local da Reunião:</div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" name="local" 
                                         onChange={(e) => setLocal(e.target.value)}/>       
                                    </div>                    
                                </div>
                            </div>
                    </form>                                       
                </div>

                <div className="alert alert-danger" role="alert">
                    Todos os campos abaixo devem ser preenchidos da seguinte forma:
                    <b> Item1, Item2, Item3...</b> 
                </div>

                <div className="card">
                    <div className="card-header" style={{textAlign:'center'}}>
                        <h5>Adicionar Participantes</h5>
                    </div>
                    <div className="card-body">
                        <form>                       
                            <div>
                                    <div className="form-group row">                                      
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="participante" placeholder="Participante1, Participante2..." required  
                                            onChange={(e) => setParticipante(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="area" placeholder="Área1, Área2..." 
                                            onChange={(e) => setArea(e.target.value)}/>       
                                        </div>
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="email" placeholder="E-mail1, E-mail2..." 
                                            onChange={(e) => setEmail(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="telefone" placeholder="Telefone1, Telefone2"
                                            onChange={(e) => setTelefone(e.target.value)} />       
                                        </div>                                     
                                    </div>             
                                </div>                                                                                    
                        </form>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" style={{textAlign:'center'}}>
                        <h5>Adicionar Assunto</h5>
                    </div>
                    <div className="card-body">
                        <form>                       
                            <div>
                                    <div className="form-group row">                                      
                                        <div className="col">
                                            <textarea className="form-control" name="assunto" placeholder="Assunto1, Assunto2" 
                                            onChange={(e) => setAssunto(e.target.value)} />       
                                        </div>
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="responsavel" placeholder="Responsável1, Responsável2" 
                                            onChange={(e) => setResponsavel(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="prazo" placeholder="Prazo1, Prazo2" 
                                            onChange={(e) => setPrazo(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="distribuicao" placeholder="Distribuição1, Distribuição2" 
                                            onChange={(e) => setDistribuicao(e.target.value)} />       
                                        </div>              
                                    </div>             
                                </div>                                                                                  
                        </form>
                    </div>    
                </div>

                <div className="card">
                    <div className="card-header" style={{textAlign:'center'}}>
                        <h5>Assinaturas</h5>
                    </div>
                    <div className="card-body">
                        <form>                       
                            <div>
                                    <div className="form-group row">                                      
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="representante" placeholder="Representante1, Representante2"  
                                           onChange={(e) => setRepresentante(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="nome" placeholder="Nome1, Nome2" 
                                           onChange={(e) => setNome(e.target.value)}/>       
                                        </div> 
                                        <div className="col">
                                            <textarea type="text" className="form-control" name="assinatura" placeholder="Assinatura, Assinatura2" 
                                            onChange={(e) => setAssinatura(e.target.value)}/>       
                                        </div>             
                                    </div>             
                                </div>                                                                                   
                        </form>
                    </div>    
                </div>

                <div className="card-body">
                    <div className="row justify-content-center align-items-center">
                    <button className='btn btn-success' onClick={() => {handleCadastrar(); setButtonPopup(true);}}>Enviar ATA</button>

                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <h1>Documento enviado!</h1>
                            <h2>Agora escolha o tipo de arquivo que deseja gerar:</h2>
                            <PDFDownloadLink document={<MyDocument />} fileName="DocumentoATA.pdf">
                                 {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')} <button style={{marginRight:"5px"}} className="btn btn-outline-danger">PDF</button>
                            </PDFDownloadLink>
                            <CSVLink data={data} headers={headers}><button className="btn btn-outline-success"> CSV</button></CSVLink>
                        </Popup>
                    </div>     
                </div>
            </div>  
        </div>   
    </div>       
    )
}
export default Formulario