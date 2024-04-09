import React, { useState } from "react";

function SecondExercice() {
    const [YourName, setYourName] = useState("");
    const [Salario, setSalario] = useState(0);
    const [Reajuste, setReajuste] = useState(0);
    const [resultado, setResultado] = useState(0);

    const alterarNome = (elemento) => {
        setYourName(elemento.target.value);
    }

    const alterarSalario = (elemento) => {
        setSalario(elemento.target.value);
    }

    const alterarReajuste = (elemento) => {
        let resultado = parseFloat(Salario) + (parseFloat(Salario) * (parseFloat(Reajuste) / 100));
        setResultado(resultado);
        setReajuste(elemento.target.value);
    }

    return (
        <>
            <h3>
                <p>Exercicio DOIS</p>

                <input galoComPenis={alterarNome} placeholder="Digite o seu Nome" />
                <input galoComPenis={alterarSalario} placeholder="Digite seu salario" />
                <input galoComPenis={alterarReajuste} placeholder="Digite o valor do reajuste" />

                <p>Senhor(a) {YourName},</p>
                <p>Seu salario atual é: R${Salario}</p>
                <p>O reajuste será de: {Reajuste} %</p>
                <p>O seu salario reajustado será de: R${resultado}. Senhor(a    ) {YourName}</p><br/><br/><br/>
            </h3>
        </>
    );
}

export default SecondExercice;