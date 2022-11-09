import Routers from './Routes';
import MyContext from './MyContext/MyContext';
import { useState } from 'react';


function App() {
  const MIN_PASSWORD_LANGTH = 6;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmePassword, setConfirmePassword] = useState('');
  const [grupo, setGrupo] = useState('');

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    email, setEmail,
    name, setName,
    password, setPassword,
    confirmePassword, setConfirmePassword,
    grupo, setGrupo,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <Routers />
    </MyContext.Provider>
  );
}

export default App;
