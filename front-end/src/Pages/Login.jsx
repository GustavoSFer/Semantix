import React, { useState } from 'react';
import Input from '../Components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="container">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col border border-success">
          <img src="#" alt="logo da empresa" />
          <h1>Faça seu Login na Plataforma</h1>
        </div>
        <div className="col border border-primary">
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
        </div>
      </div>
    </main>
  );
}

export default Login;
