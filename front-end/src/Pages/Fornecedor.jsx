import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MensagemErro from '../Components/MensagemErro';
import { createUser } from '../Services';
import MyContext from '../MyContext/MyContext';
import { isValidName, isValidCnpj } from '../Util/Validacao';
import AboutData from '../Components/AboutData';

function Fornecedor() {
  const history = useNavigate();
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const {
    email, name, password, grupo, clearForm, msgErro, setMsgErro,
  } = useContext(MyContext);

  const cadastrar = async () => {
    try {
      const body = {
        email, name, password, grupo, empresa, cnpj,
      };
      const user = await createUser('/provider', body);
      localStorage.setItem('user', JSON.stringify(user));
      clearForm();
      setEmpresa('');
      setCnpj('');
      history('/home');
    } catch (error) {
      setMsgErro(error.response.data.message);
    }
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
    <main className="text-center morgin-auto">
      <div className="row row-cols-1 row-cols-lg-2 m-2 width">
        <div className="col">
          <p className="text-start">
            Cadastro de Usuário -
            <span className="ms-1">Fornecedor</span>
          </p>
          <div className="color-form">
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
            { msgErro && <MensagemErro /> }
            <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">Cadastrar</Button>
          </div>
        </div>

        <div className="col">
          <AboutData />
        </div>
      </div>
    </main>

  );
}

export default Fornecedor;
