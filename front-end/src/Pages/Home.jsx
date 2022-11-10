import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGroup } from '../Services';
import Header from '../Components/Header';
import Button from '../Components/Button';
import TrCozinheiro from '../Components/TrCozinheiro';
import TrFornecedor from '../Components/TrFornecedor';
import TrSuprimentos from '../Components/TrSuprimentos';

function Home() {
  const history = useNavigate();
  const [nameUser, setNameUser] = useState('');
  const [nameGroup, setNameGroup] = useState('');
  const [data, setData] = useState([]);

  const api = async () => {
    const { name, grupo } = JSON.parse(localStorage.getItem('user'));
    setNameUser(name);
    setNameGroup(grupo);
    const result = await getGroup('/user/', grupo);
    setData(result);
  };

  const handleClick = () => {
    console.log('clicado');
    localStorage.removeItem('user');
    history('/');
  };

  const listagem = (grupo) => {
    if (grupo === 'fornecedor') {
      return (
        <table className="table table-dark border border-info">
          <thead>
            <tr className="table-active">
              <td>Nome</td>
              <td>E-mail</td>
              <td>Nome Empresa</td>
              <td>CNPJ</td>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line no-underscore-dangle
              data.map((item) => <TrFornecedor key={item._id} item={item} />)
            }
          </tbody>
        </table>
      );
    }
    if (grupo === 'cozinheiro') {
      return (
        <table className="table table-dark border border-info">
          <thead>
            <tr className="table-active">
              <td>Nome</td>
              <td>E-mail</td>
              <td>CRI</td>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line no-underscore-dangle
              data.map((item) => <TrCozinheiro key={item._id} item={item} />)
            }
          </tbody>
        </table>
      );
    }
    return (
      <table className="table table-dark border border-info">
        <thead>
          <tr className="table-active">
            <td>Nome</td>
            <td>E-mail</td>
            <td>Suprimentos</td>
          </tr>
        </thead>
        <tbody>
          {
              // eslint-disable-next-line no-underscore-dangle
              data.map((item) => <TrSuprimentos key={item._id} item={item} />)
            }
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="home p-4">
      <Header name={nameUser} grupo={nameGroup} />
      <main>
        <h1>Listagem de Usuários</h1>
        { data && listagem(nameGroup)}

        <div>
          <Button click={handleClick} dataTestId="btn-sair">Sair</Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
