import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function PriceListComponents()
{
    let valor_a = 4;
    let valor_b = 123;
    let [total, setTotal] = useState(valor_a + valor_b);

function acaoBotaoMais()
{
    setTotal(total +1);
    console.log(total)
}
function acaoBotaoMenos()
{
    setTotal(total - 1);
    console.log(total)
}
    return(
        <>
            <Table striped hover responsive>
                <tr>
                   <td>Valor 1</td> 
                   <td>Valor 2</td> 
                   <td>Valor 3</td> 
                </tr>
                <tr>
                    <td>{valor_a}</td>
                    <td>{valor_b}</td>
                    <td>{total}</td>
                </tr>
            </Table>
                <Button variant="outline-success" onClick={acaoBotaoMais}>Mais</Button>{' '}
                <Button variant="outline-danger" onClick={acaoBotaoMenos}>Menos</Button>{' '}

        </>
    );
    
}

export default PriceListComponents;