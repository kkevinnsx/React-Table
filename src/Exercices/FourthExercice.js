import Alert from 'react-bootstrap/Alert';
import React, { useState } from "react";

function FourthExercice() {
    const [nomeProduto, setProduto] = useState("");
    const [precoProduto, setPreco]  = useState("");
    const [novoValor, setValor]     = useState("");

    const produtoNome = (elemento) => {
        setProduto (elemento.target.value);
    }

    const produtoPreco = (elemento) => {
        setPreco(elemento.target.value);
    }

    const valorNovo = (event) => {
        event.preventDefault();
        const novoValor   = (parseFloat(precoProduto) + (parseFloat(precoProduto) * 5 / 100));
        setValor(novoValor)
    }
      
    return(      
<>
<div className="container pt-2">
    <div className="card">
        <div className="card-title">
            <h2 className = "p-3">Exercicio N°4</h2>
            <h5 className = "p-3">A mudança será de 5% no valor do produto</h5>
        </div>
    </div>
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-sm-12 col-md-8 col-lg-4 mt-5">
        <label class="label-control"><b>Nome do Produto: </b></label>
        <input
            class       = "form-control"
            onChange    = {produtoNome}
            placeholder = "Digite o nome"
            maxLength   = {50}
            type        = "text"
        ></input>
    </div>
<div className = "col-sm-12 col-md-8 col-lg-4 mt-5">
    <label class   = "label-control"><b>Valor do Produto:</b></label>
        <input
            class       = "form-control"
            onChange    = {produtoPreco}
            placeholder = "Digite o valor"
            maxLength   = {50} 
            type        = "number"
            disabled    = {!nomeProduto}
    ></input>
</div>
    <div className   = "col-sm-12 col-md-4 col-lg-2 mt-4">
        <button type = "button"
            disabled     = {!nomeProduto || !precoProduto}
            class        = "btn btn-primary mt-5"
            onClick      = {valorNovo}
            >Calcular novo valor
        </button>
    </div>
        <div className   = "col-sm-12 col-md-4 col-lg-2 mt-4">
            <button type = "button"
                disabled     = {!nomeProduto || !precoProduto}
                class        = "btn btn-primary mt-5"
            >Resetar Informações
        </button>
    </div>
</div>
</div>
    {novoValor > 0 && (
        <Alert
            className = "p-3"
            variant   = "primary">
        <p>O produto {nomeProduto} teve uma mudança de preço de 5% e o novo valor será de: {novoValor}</p>
    </Alert>
    )}
</div>
</div>
</>
);
}
export default FourthExercice;