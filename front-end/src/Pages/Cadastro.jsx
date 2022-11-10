import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MyContext from '../MyContext/MyContext';
import {
  isValidEmail,
  isValidPassword,
  isValidName,
  confirmPassword,
  isValidGroup,
} from '../Util/Validacao';
import AboutData from '../Components/AboutData';

function Cadastro() {
  const history = useNavigate();
  const {
    MIN_PASSWORD_LANGTH,
    email, setEmail,
    name, setName,
    password, setPassword,
    confirmePassword, setConfirmePassword,
    grupo, setGrupo,
  } = useContext(MyContext);

  const [msgErro, setMsgErro] = useState(false);

  const handleClick = () => {
    if (
      isValidEmail(email)
      && isValidPassword(password, MIN_PASSWORD_LANGTH)
      && isValidName(name)
      && confirmPassword(password, confirmePassword)
      && isValidGroup(grupo)
    ) {
      setMsgErro(false);
      history(`/${grupo}`);
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
            <span className="ms-1 grupo">Padrão</span>
          </p>
          <div className="color-form">
            <h1>Crie sua conta</h1>
            <Input
              type="text"
              name="E-mail"
              handleChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              type="text"
              name="Nome"
              handleChange={(e) => setName(e.target.value)}
              value={name}
            />

            <Input
              type="password"
              name="Senha"
              handleChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className="min-password text-end">
              {`Caracteres minimo para senha: ${MIN_PASSWORD_LANGTH}`}
            </p>

            <Input
              type="password"
              name="Confirme sua senha"
              handleChange={(e) => setConfirmePassword(e.target.value)}
              value={confirmePassword}
            />

            <select className="form-select mt-3 ver" value={grupo} onChange={(e) => setGrupo(e.target.value)}>
              <option defaultValue="selecione">Seu grupo</option>
              <option value="fornecedor">Fornecedor</option>
              <option value="cozinheiro">Cozinheiro</option>
              <option value="suprimentos">Suprimentos</option>
            </select>

            {
              msgErro
                && <p className="text-danger">Dados incorreto! Verificar todos os campos.</p>
            }

            <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">PRÓXIMO</Button>
          </div>
        </div>

        <div className="col fundo">
          <AboutData />
        </div>
      </div>
    </main>

  );
}

export default Cadastro;
