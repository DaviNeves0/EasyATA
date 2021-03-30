import React from 'react'
import "./login.css"
import imagens from "../assets/img1.png"
import { Link } from 'react-router-dom'



function Login() {
    return (
        <div className="container shadow">
            <div className="row no-gutter centered">   
                {/*aqui vem a parte esquerda*/}
                <div className="col-md-7 bg-esquerda">
                    <div className="login d-none d-md-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto welcome">
                                    <form>
                                        <div className="mb-3">
                                            <img src={imagens} height="100%" width="50%"/>
                                        </div>
                                        <div className="mb-3">
                                            <p>Seja bem vindo ao EasyATA</p>
                                        </div>
                                    </form>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                {/*aqui vem a parte direita*/}
                <div className="col-md-5" style={{background:"#F0F1F3"}}>
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 mx-auto">
                                        <div className="mb-5 text-center">
                                            <p>Seja bem vindo ao EasyATA !</p>
                                        </div>
                                    <form>
                                        <div className="form-group mb-4">
                                            <input id="login" type="login" placeholder="Login" className="form-control" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <input id="senha" type="password" placeholder="Senha" className="form-control" />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-4">
                                            <a href="#" style={{float:"right", fontSize:"12px"}}>Esqueceu a senha?</a>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                                        <div className="sign-up">
                                            Não tem uma conta? <Link to="/cadastro">Crie uma !</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>   
    )
}

export default Login
