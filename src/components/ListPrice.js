import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

let idProduto01 = {
    id: 1,
    produto: "Pastel",
    categoria: "Comida",
    quantidade: 25,
    preco: 8.75,
};

let idProduto02 = {
    id: 2,
    produto: "Pamonha",
    categoria: "Comida",
    quantidade: 15,
    preco: 10.00,
};

let idProduto03 = {
    id: 3,
    produto: "Pizza",
    categoria: "Comida",
    quantidade: 12,
    preco: 75.00,
};

let valorProduto = {
    totalProd01: idProduto01.preco * idProduto01.quantidade,
    totalProd02: idProduto02.preco * idProduto02.quantidade,
    totalProd03: idProduto03.preco * idProduto03.quantidade,
};

let gerais = {
    preco: idProduto01.preco + idProduto02.preco + idProduto03.preco,
    quantidade: idProduto01.quantidade + idProduto02.quantidade + idProduto03.quantidade,
    precoGeral: valorProduto.totalProd01 + valorProduto.totalProd02 + valorProduto.totalProd03,
};

let listaProdutinhos = [
    idProduto01,
    idProduto02,
    idProduto03,
    valorProduto,
    gerais
];

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

        {listaProdutinhos.map(function(batata){
            return <tr>
                <td>{batata.id}</td><td>{batata.produto}</td><td>{batata.categoria}</td><td>{batata.quantidade}</td><td>{batata.preco}</td><td></td>
            </tr>;
        }
    )
}

        </tbody>

    </Table>

    </Col>
    </Row>
    </Container>
    );
}
export default ListPrice;