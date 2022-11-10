import React, { useEffect, useState } from 'react';
import { getGroup } from '../Services';
import Header from '../Components/Header';
import Tr from '../Components/Tr';

function Home() {
  const [nameUser, setNameUser] = useState('');
  const [nameGroup, setNameGroup] = useState('');
  const [data, setData] = useState([]);

  const api = async () => {
    const { name, grupo } = JSON.parse(localStorage.getItem('user'));
    setNameUser(name);
    setNameGroup(grupo);
    console.log(nameGroup);
    const result = await getGroup('/user/', grupo);
    setData(result);
    console.log(data);
  };

  const listagem = (grupo) => {
    if (grupo === 'fornecedor') {
      return (
        <div>
          <p>verificando o retorno fornecedor</p>
        </div>
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
              data.map((item) => <Tr key={item._id} item={item} />)
            }
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <p>é outroooo</p>
      </div>
    );
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="home">
      <Header name={nameUser} grupo={nameGroup} />
      <main>
        <h1>Listagem de Usuários</h1>
        { data && listagem(nameGroup)}
      </main>
    </div>
  );
}

export default Home;
