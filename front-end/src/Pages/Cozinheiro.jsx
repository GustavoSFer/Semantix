import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MensagemErro from '../Components/MensagemErro';
import { createUser } from '../Services';
import MyContext from '../MyContext/MyContext';
import { isValidCri } from '../Util/Validacao';
import AboutData from '../Components/AboutData';

function Cozinheiro() {
  const history = useNavigate();
  const {
    email, name, password, grupo, clearForm, msgErro, setMsgErro,
  } = useContext(MyContext);
  const [cri, setCri] = useState('');

  const cadastrar = async () => {
    try {
      const body = {
        email, name, password, grupo, cri,
      };
      const user = await createUser('/cooker', body);
      clearForm();
      setCri('');
      history('/home');
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      setMsgErro(error.response.data.message);
    }
  };

  const handleClick = () => {
    if (isValidCri(cri)) {
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
            Cadastro de usuário -
            <span className="ms-1">Cozinheiro</span>
          </p>
          <div className="color-form">
            <h1>Crie sua conta</h1>
            <Input
              type="text"
              name="Seu CRI (Número da cardeneta)"
              handleChange={(e) => setCri(e.target.value)}
              value={cri}
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

export default Cozinheiro;
