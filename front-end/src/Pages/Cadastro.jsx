import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MyContext from '../MyContext/MyContext';

function Cadastro() {
  const history = useNavigate();
  const {
    email, setEmail,
    name, setName,
    password, setPassword,
    confirmePassword, setConfirmePassword,
    grupo, setGrupo,
  } = useContext(MyContext);

  const handleClick = () => {
    history(`/${grupo}`);
  };

  return (
    <main className="container text-center position-absolute top-50 start-50 translate-middle">
      <div className="row row-cols-1 row-cols-lg-2 m-2">
        <div className="col border border-primary">
          <p className="text-start">
            Cadastro de usuário -
            <span className="ms-1">Padrão</span>
          </p>
          <div>
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

            <Input
              type="password"
              name="Confirme sua senha"
              handleChange={(e) => setConfirmePassword(e.target.value)}
              value={confirmePassword}
            />

            <select className="form-select mt-3" onChange={(e) => setGrupo(e.target.value)}>
              <option defaultValue="selecione">Seu grupo</option>
              <option value="fornecedor">Fornecedor</option>
              <option value="cozinheiro">Cozinheiro</option>
              <option value="suprimentos">Suprimentos</option>
            </select>

            <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">PRÓXIMO</Button>
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

export default Cadastro;
