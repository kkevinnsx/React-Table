import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import axios from "axios";

function FifthExercice() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [status, setStatus] = useState({
    variant: "",
    message: "",
  });

  function buscarCEP(cep) {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        setAddress(response.data);
        setStatus({
          variant: "primary",
          message: "Deu tudo certo!",
        });
      })
      .catch(function (error) {
        setStatus({
          variant: "danger",
          message: "Deu tudo errado!",
        });

        console.log(error);
      });
  }

  const mudarCep = (event) => {
    setCep(event.target.value);
  };

  return (
    <>
      <div className="container pt-2">
        <div className="card-title">
          <div className="card">
            <h2 className="p-3">VEJA CEP</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                <label className="label-control"><b>Digite o seu CEP:</b></label>
                <input
                  onChange={mudarCep}
                  className="form-control"
                  placeholder="CEP"
                  maxLength={8}
                  value={cep}
                  type="number"
                ></input>
                </div>
              <button
                className="btn btn-primary mt-5"
                onClick={() => buscarCEP(cep)}
              >
                Buscar CEP
              </button>
            </div>
          </div>
          <Alert variant={status.variant}>{status.message}</Alert>
            <div className="container mt-4">
              <p>CEP: {address.cep}</p>
              <p>Logradouro: {address.logradouro}</p>
              <p>Complemento: {address.complemento || "-"}</p>
              <p>Localidade: {address.localidade}</p>
              <p>UF: {address.uf}</p>
              <p>IBGE: {address.ibge}</p>
              <p>GIA: {address.gia}</p>
              <p>DDD: {address.ddd}</p>
              <p>SIAFI: {address.siafi || "-"}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default FifthExercice;