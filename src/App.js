import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import VerTodasCart from './pages/VerTodasCart';
import VerTodas from './pages/VerTodas';
import VerTodasPopu from './pages/VerTodasPopu';


function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Favoritos' component={Favoritos}/>
          <Route path='/VerTodas' component={VerTodas}/>
          <Route path='/Detalle' component={Detalle}/>
          <Route path='/VerTodasCartelera' component={VerTodasCart}/>
          <Route path='/VerTodasPopulares' component={VerTodasPopu}/>
          <Route path='/Peliculas/:id' component={Detalle}/>
          <Route path='' component={Error}/>
         
        </Switch>
      <Footer/>
     
    </div>
  );
}

export default App;


//npm i npm start