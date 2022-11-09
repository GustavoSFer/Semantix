import React, { useState } from 'react';
// import MyContext from '../MyContext/MyContext';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Fornecedor() {
//   const {
//     email, setEmail,
//     name, setName,
//   } = useContext(MyContext);
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleClick = () => {
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
              name="CNPJ da sua empresa"
              handleChange={(e) => setCnpj(e.target.value)}
              value={cnpj}
            />

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
