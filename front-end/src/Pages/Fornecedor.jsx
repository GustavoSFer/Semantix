import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { createUserProvider } from '../Services';
import MyContext from '../MyContext/MyContext';
import { isValidName, isValidCnpj } from '../Util/Validacao';

function Fornecedor() {
  const history = useNavigate();
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [msgErro, setMsgErro] = useState(false);
  const {
    email, name, password, grupo, clearForm,
  } = useContext(MyContext);

  const cadastrar = async () => {
    const body = {
      email, name, password, grupo, empresa, cnpj,
    };
    await createUserProvider('/provider', body);
    clearForm();
    setEmpresa('');
    setCnpj('');
    history('/home');
  };

  const handleClick = () => {
    if (
      isValidName(empresa)
      && isValidCnpj(cnpj)
    ) {
      setMsgErro(false);
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
