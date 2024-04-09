const FirstExercice = ()=> {
    let Velocidade = 100;
    let Distancia  = 500;
    let resultado  = Distancia / Velocidade; 
    return(
    <>
    <h3>
    <p>Exercicio UM</p>
    <p>Sua velocidade média é de: {Velocidade} KM/h</p>
    <p>A distancia percorrida foi: {Distancia} Kilometros</p>
    <p>O tempo que voce levou para chegar foi: {resultado} Horas</p><br/><br/><br/>
    </h3>
    </>
    );

}
export default FirstExercice;