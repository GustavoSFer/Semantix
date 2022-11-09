import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Fornecedor from '../Pages/Fornecedor';
import Cozinheiro from '../Pages/Cozinheiro';
import Suprimentos from '../Pages/Suprimentos';
import Home from '../Pages/Home';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/fornecedor" element={<Fornecedor />} />
      <Route path="/cozinheiro" element={<Cozinheiro />} />
      <Route path="/suprimentos" element={<Suprimentos />} />
    </Routes>
  );
}

export default Routers;
