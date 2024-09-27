import { Component } from "react";
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import Loader from '../Loader/Loader'
class DetalleContainer extends Component  {
    constructor(props){
        super(props);
            this.state = {
                peliculas:[],
                Cargando: true,
                esFavorito: false,
            }
    }
    componentDidMount(){
        const storageDetalle = localStorage.getItem('detalle')
        if(storageDetalle !== null){
            const parsedStorageDetalle = JSON.parse(storageDetalle);
            fetch(
                `https://api.themoviedb.org/3/movie/${parsedStorageDetalle}?api_key=26cb00ba0e4d52cae073a420c45e2d99`
            ).then((response) => response.json())  
            .then((peliculas) => {
                this.setState({
                    peliculas, Cargando: false
            });
        })
            
        }
        
        const prevStorage = Number(JSON.parse(storageDetalle))
        const storageFavoritos = localStorage.getItem('favoritos');
        if(storageFavoritos !== null){
            const parsedStorage1 = JSON.parse(storageFavoritos)
            console.log('este es el storage1: ',storageFavoritos)
            const estaEnFavorito = parsedStorage1.includes(prevStorage)
            console.log('este es el this.state.peliculas.id:', prevStorage)
            //console.log('aca se ve si esta en favorito o no: ',estaEnFavorito)
            if(estaEnFavorito){
                this.setState({
                    esFavorito: true
                })
            }
        }
    }    
        
    

    agregarAFavoritos(){
        const storage = localStorage.getItem('favoritos');
        if(storage !== null){
            const parsedStorage = JSON.parse(storage)
            parsedStorage.push(Number(this.state.peliculas.id)) //FIJARSE LO DE NUMBER, CAPAZ NO FUNCIONA
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', stringStorage)
        }else{
            const primerFavorito = [this.state.peliculas.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem('favoritos', stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    }
    quitarFavoritos(){
        const storage = localStorage.getItem('favoritos')
        const parsedStorage = JSON.parse(storage)
        console.log(parsedStorage)
        const restoFavoritos = parsedStorage.filter(alf => alf !== this.state.peliculas.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem('favoritos', stringStorage)
        this.setState({
            esFavorito: false
        })
    }

    componentWillUnmount() {
        localStorage.removeItem('peliculaDetalle');
    }   

    render(){
        const {Cargando} = this.state;
        const {peliculas} = this.state;
    
            if (Cargando) {
                return <Loader/>;
            }

            return(
                <div>
                    <h1>Detalle</h1>
                    <h2>Nombre: {peliculas.original_title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${peliculas.poster_path}`} alt={'Imagen de la pelicula'} className="imagen" />
                    <h2>Rating: {peliculas.vote_average}</h2>
                    <h2>Fecha de estreno: {peliculas.release_date}</h2>
                    <h2>Duracion: {peliculas.runtime ? `${peliculas.runtime} minutos` : 'Duración no disponible'}</h2>
                    <h2>Generos: {peliculas.genres.map(genero => genero.name).join(', ')}</h2>
                    <h2>Sinopsis: {peliculas.overview}</h2>

                    <div className= 'corazon' onClick={()=> this.state.esFavorito ? this.quitarFavoritos() : this.agregarAFavoritos() }>
                        {this.state.esFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                    </div>

                </div>
            )
    }
}


export default DetalleContainer