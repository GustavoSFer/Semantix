import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { loginUser } from '../Services';
import logoEmpresa from '../imagens/logo-empresa.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);

  const handleClick = async () => {
    console.log(setMsgErro);
    const body = { email, password };
    const login = await loginUser('/loginUser', body);
    console.log(login);
  };

  const logo = {
    width: '200px',
  };

  return (
    <main className="text-center morgin-auto">
      <div className="row row-cols-1 row-cols-lg-2 m-2 ">
        <div className="text-start fundo">
          <img src={logoEmpresa} alt="logo da empresa" style={logo} />
          <h1 className="fw-bolder text-white">Faça seu Login na Plataforma</h1>
        </div>
        <div className="col color-form">
          <div>
            <Input
              type="text"
              name="E-mail"
              handleChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              name="Senha"
              handleChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">Entrar</Button>
            { msgErro && <p className="text-danger">E-mail ou senha incorreto!</p> }
          </div>
          <p className="m-3 text-white">
            Não tem uma conta?
            <Link to="/cadastro" className="register">Registre-se</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
