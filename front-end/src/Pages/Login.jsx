import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import loginUser from '../Services';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);

  const handleClick = async () => {
    console.log(setMsgErro);
    await loginUser('/', { email: 'gustavo@gmail.com', password: 'gustavo123' });
  };

  const register = {
    marginLeft: '15px',
  };

  return (
    <main className="container text-center position-absolute top-50 start-50 translate-middle">
      <div className="row row-cols-1 row-cols-lg-2 m-2">
        <div className="col border border-success">
          <img src="#" alt="logo da empresa" />
          <h1 className="fw-bolder">Faça seu Login na Plataforma</h1>
        </div>
        <div className="col border border-primary">
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
          <p className="m-3">
            Não possui cadastro?
            <Link to="/cadastro" style={register}>Registre-se</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
