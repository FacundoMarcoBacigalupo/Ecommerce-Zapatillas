import AppNavBar from './Componentes/AppNavBar/AppNavBar';
import AppFooter from './Componentes/AppFooter/AppFooter';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetallesContainer from './Componentes/ItemDetallesContainer/ItemDetallesContainer'




function App() {

  return (
    <div className="App">
        <AppNavBar />

        <ItemListContainer />

        <ItemDetallesContainer />

        <AppFooter />
    </div>
  );
}



export default App;