import React, {useState} from "react";

function ThirdExercice(){
    const [NomeTime , setNomeTime]  = useState(""); 
    const [Vitorias , setVitorias]  = useState(0);
    const [Empates  , setEmpates ]  = useState(0); 
    const [Pontuacao, setPontuacao]  = useState(0);

    const NomeEquipe = (elemento) => {
        setNomeTime(elemento.target.value);
    }

    const qntVitorias = (elemento) => {
        setVitorias(elemento.target.value);
    }

    const qntEmpates = (elemento) => {
        setEmpates(elemento.target.value);
    }

     const totalPontos = (elemento) => {
         let pontuacao = (parseInt(Vitorias) * 3) + parseInt(Empates);
         setPontuacao(pontuacao);
         setPontuacao(elemento.target.value);
     }

    return(
    <>

    <div className = "container pt-2">
        <div className = "card">
            <div className = "card-title">
                <h3 className = "">Exercicio TRES</h3>
            </div>
        <div className = "card-body">
    <div className = "row">

    <div className = "col-sm-12 col-md-2 col-lg-2 mt-5">
    <label class   = "label-control"><b>Nome da Equipe: </b></label>
        <input
            onChange    = {NomeEquipe}  
            placeholder = "Digite o nome do Time"
            maxLength   = {50}
            type        = "text"  
        ></input>
    </div>

    <div className = "col-sm-12 col-md-2 col-lg-2 mt-5">
        <label class   = "label-control"><b>Quantidade de Vitorias: </b></label>
            <input
            onChange    = {qntVitorias}
            placeholder = "Digite o N° de Vitorias"
            maxLength   = {50} 
            type        = "number"
            disabled    = {!NomeTime}
        ></input>
    </div>

    <div className = "col-sm-12 col-md-8 col-lg-2 mt-5">
        <label class   = "label-control"><b>Quantidade de Empates: </b></label>
            <input
            onChange    = {qntEmpates}
            placeholder = "Digite o N° de Empates"
            maxLength   = {50} 
            type        = "number"
            disabled    = {!Vitorias}
        ></input>
    </div>

    <div className   = "col-sm-12 col-md-8 col-lg-1 mt-3">
        <button type = "button"
        disabled     = {!NomeTime || !Vitorias || !Empates}
        class        = "btn btn-primary mt-5"
        >Calcular
        </button>
    </div>
</div>
</div>
</div>
</div>
    </>
);
}
export default ThirdExercice;