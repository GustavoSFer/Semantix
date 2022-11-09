import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {
  isValidName,
  isValidCnpj,
} from '../Util/Validacao';

function Fornecedor() {
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [msgErro, setMsgErro] = useState(false);

  const cadastrar = async () => {

  };

  const handleClick = () => {
    if (
      isValidName(empresa)
      && isValidCnpj(cnpj)
    ) {
      setMsgErro(false);
      console.log('ooook');
      cadastrar();
    } else {
      setMsgErro(true);
    }
  };

  return (
    <main className="container text-center position-absolute top-50 start-50 translate-middle">
      <div className="row row-cols-1 row-cols-lg-2 m-2">
        <div className="col border border-primary">
          <p className="text-start">
            Cadastro de usuário -
            <span className="ms-1">Fornecedor</span>
          </p>
          <div>
            <h1>Crie sua conta</h1>
            <Input
              type="text"
              name="Nome da empresa"
              handleChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
            />

            <Input
              type="text"
              name="CNPJ da sua empresa (ex: 00.000.000/0000-00)"
              handleChange={(e) => setCnpj(e.target.value)}
              value={cnpj}
            />
            {
              msgErro
                && <p className="text-danger">Dados incorreto! Verificar todos os campos.</p>
            }
            <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">Cadastrar</Button>
          </div>
        </div>

        <div className="col border border-success">
          <img src="#" alt="logo da empresa" />
          <h1 className="fw-bolder">Crie seu Login na Plataforma</h1>
        </div>
      </div>
    </main>

  );
}

export default Fornecedor;
