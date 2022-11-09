import Routers from './Routes';
import MyContext from './MyContext/MyContext';


function App() {

  const contextValue = { };

  return (
    <MyContext.Provider value={contextValue}>
      <Routers />
    </MyContext.Provider>
  );
}

export default App;
