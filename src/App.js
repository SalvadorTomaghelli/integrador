import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import VerTodasCart from './pages/VerTodasCart';
import VerTodasPopu from './pages/VerTodasPopu';


function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/favoritos' component={Favoritos}/>
          <Route path='/detalle' component={Detalle}/>
          <Route path='/cartelera' component={VerTodasCart}/>
          <Route path='/populares' component={VerTodasPopu}/>
          <Route path='/peliculas/:id' component={Detalle}/>
          <Route path='' component={Error}/>
         
        </Switch>
      <Footer/>
     
    </div>
  );
}

export default App;


//npm i npm start