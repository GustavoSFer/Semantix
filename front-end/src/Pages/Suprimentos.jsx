import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import AboutData from '../Components/AboutData';
import MyContext from '../MyContext/MyContext';
import { createUser } from '../Services';
import MensagemErro from '../Components/MensagemErro';

function Suprimentos() {
  const history = useNavigate();
  const {
    email, name, password, grupo, clearForm, msgErro, setMsgErro,
  } = useContext(MyContext);

  const optionSuprimentos = ['Selecione os suprimentos', 'Arroz', 'Feijão', 'Macarrão'];
  const [suprimento1, setSuprimento1] = useState('');
  const [suprimento2, setSuprimento2] = useState('');
  const [suprimento3, setSuprimento3] = useState('');

  const cadastrar = async () => {
    const suprimentos = `${suprimento1} ${suprimento2} ${suprimento3}`;
    const body = {
      email, name, password, grupo, suprimentos,
    };
    await createUser('/supplies', body);
    clearForm();
    setSuprimento1('');
    setSuprimento2('');
    setSuprimento3('');
    history('/home');
  };

  const handleClick = () => {
    if (suprimento1) {
      setMsgErro(false);
      cadastrar();
    } else {
      setMsgErro(true);
    }
  };

  // const removeItem = (valor) => {
  //   const index = optionSuprimentos.indexOf(valor);
  //   if (index > -1) optionSuprimentos.splice(index, 1);
  // };

  return (
    <main className="text-center morgin-auto">
      <div className="row row-cols-1 row-cols-lg-2 m-2 width">
        <div className="col">
          <p className="text-start">
            Cadastro de Usuário -
            <span className="ms-1">Suprimentos</span>
          </p>
          <div className="color-form">
            <h1>Crie sua conta</h1>
            <select className="form-select mt-3 ver" onChange={(e) => setSuprimento1(e.target.value)}>
              {
                optionSuprimentos.map((item) => <option placeholder="Selecione os suprimentos" key={item}>{item}</option>)
              }
            </select>
            {
              suprimento1 !== ''
                && (
                  <select className="form-select mt-3 ver" onChange={(e) => setSuprimento2(e.target.value)}>
                    {
                      optionSuprimentos.map((item) => <option placeholder="Selecione os suprimentos" key={item}>{item}</option>)
                    }
                  </select>
                )
            }
            {
            suprimento2 !== ''
              && (
                <select className="form-select mt-3 ver" onChange={(e) => setSuprimento3(e.target.value)}>
                  {
                    optionSuprimentos.map((item) => <option placeholder="Selecione os suprimentos" key={item}>{item}</option>)
                  }
                </select>
              )
            }

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

export default Suprimentos;
