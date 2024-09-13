import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import VerTodas from './pages/VerTodas';

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Favoritos' component={Favoritos}/>
          <Route path='/VerTodas' component={VerTodas}/>
        </Switch>
      <Footer/>
     
    </div>
  );
}

export default App;


//npm i npm start