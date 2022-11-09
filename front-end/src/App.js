import { Routes, Route } from 'react-router-dom';
import CreateUser from './Pages/CreateUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateUser />} />
    </Routes>
  );
}

export default App;
