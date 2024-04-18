import React, { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function SixthExercice() {
    const [MoedaUsuario, setMoedaUsuario]     = useState("");
    const [ValorCotacao, setValorCotacao]     = useState({});
    const [FinalMoeda  , setFinalMoeda]       = useState();
    const [TipoMoeda  , setTipoMoeda]         = useState();
    const [TipoConversao  , setTipoConversao] = useState();
    const [status, setStatus] = useState({
        variant: "",
        message: "",
    });

    function calcularCotacao(MoedaUsuario) {
        axios.get(`https://economia.awesomeapi.com.br/last/${TipoMoeda}-${TipoConversao}`)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
    
                setFinalMoeda(MoedaUsuario * response.data[`${TipoMoeda}-${TipoConversao}`].bid);
    
                setStatus({
                    variant: "primary",
                    message: `Deu tudo certo! Valor do dólar: ${FinalMoeda}`
                });
            })
            .catch(function (error) {
                console.log(error);
                setStatus({
                    variant: "danger",
                    message: "Algo deu errado ao obter a cotação.",
                });
            });
    }

    const escolherMoeda = (event) => {
        setMoedaUsuario(event.target.value);
    };

    const selecionarMoeda = (event) => {
        setTipoMoeda(event.target.value);
    };
    
    const selecionarConversao = (event) => {
        setTipoConversao(event.target.value);
    };


    return (
        <>
            <div className="container pt-2">
                <div className="card-title">
                    <div className="card">
                        <h2 className="p-3">Conversor de Moedas</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <select className    = "form-select mb-2" onChange={selecionarMoeda}>
                    <option select="true">Selecione a moeda que você irá inserir</option>
                    <option defaultValue = "BRL">BRL</option>
                    <option defaultValue = "USD">USD</option>
                    <option defaultValue = "EUR">EUR</option>

                </select>

                <select className    = "form-select mb-2" onChange={selecionarConversao}>
                    <option select="true">Selecione a moeda que será convertida</option>
                    <option defaultValue = "BRL">BRL</option>
                    <option defaultValue = "USD">USD</option>
                    <option defaultValue = "EUR">EUR</option>
                </select>

                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                <label className="label-control">
                                    <b>Digite a quantidade que deseja converter</b>
                                    <input
                                        className="form-control"
                                        placeholder="Quantidade da sua moeda"
                                        onChange={escolherMoeda}
                                        maxLength={8}
                                        value={MoedaUsuario}
                                        type="number"
                                    ></input>
                                </label>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary mt-5"
                            onClick={() => calcularCotacao(MoedaUsuario)}>
                            Ver a cotação atual
                        </button>
                        <Alert variant={status.variant}>{status.message}</Alert>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SixthExercice;

