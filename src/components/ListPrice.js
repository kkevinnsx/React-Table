import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

let id_produto_1     = 1;
let id_produto_2     = 2;
let id_produto_3     = 3;
     
let produto_1        = "Pastel";
let produto_2        = "Pamonha";
let produto_3        = "Pizza";
     
let categoria_1      = "comida";
let categoria_2      = "comida";
let categoria_3      = "comida";
     
let quantidade_1     = 5;
let quantidade_2     = 8;
let quantidade_3     = 9;

let preco_1          = 8.00;
let preco_2          = 15.00;
let preco_3          = 71.00;

let precoTotal_1     = preco_1 * quantidade_1; 
let precoTotal_2     = preco_2 * quantidade_2; 
let precoTotal_3     = preco_3 * quantidade_3; 

let quantidade_total = quantidade_1 + quantidade_2 + quantidade_3;
let preco_geral      = preco_1      + preco_2      + preco_3;
let geral_preco      = precoTotal_1 + precoTotal_2 + precoTotal_3;


function ListPrice(){
    return (

    <Container><Row justify-content-md-center><Col>
    <Table striped hover responsive>
        <thead>
        <tr>
        <th colspan = "7" className='text-center'><h2>vendas</h2></th>
        </tr> 
            <tr>
                <th>#</th>
                <th>Produto:</th>
                <th>categoria:</th>
                <th>Quantidade:</th>
                <th>Preço unitário:</th>
                <th>Total:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{id_produto_1}</td>
                <td>{produto_1}</td>
                <td>{categoria_1}</td>
                <td class="right">{quantidade_1}</td>
                <td class="right">R$ {preco_1}</td>
                <td class="right">R$ {precoTotal_1}</td>

            </tr>
            <tr>
                <td>{id_produto_2}</td>
                <td>{produto_2}</td>
                <td>{categoria_2}</td>
                <td class="right">{quantidade_2}   </td>
                <td class="right">R$ {preco_2}     </td>
                <td class="right">R$ {precoTotal_2}</td>


            </tr>
            <tr>
                <td>{id_produto_3}</td>
                <td>{produto_3}</td>
                <td>{categoria_3}</td>
                <td class="right">{quantidade_3}</td>
                <td class="right">R$ {preco_3}</td>
                <td class="right">R$ {precoTotal_3}</td>

            </tr>
            <tr>
                <td></td>
                <td class="back"></td>
                <td class="back"></td>
                <td class="right">{quantidade_total}</td>
                <td class="right">R$ {preco_geral}</td>
                <td class="right">R$ {geral_preco}</td>

            </tr>
        </tbody>

    </Table>

    </Col>
    </Row>
    </Container>
    );
}
export default ListPrice;