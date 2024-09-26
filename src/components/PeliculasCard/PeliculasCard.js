import { Component } from "react";
import './PeliculasCard.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

class PeliculasCard extends Component{
    constructor(props){
        super(props)
        this.state={
            mostrarMas: false,
            esFavorito: false
        }
    
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos');
        if(storage !== null){
            const parsedStorage = JSON.parse(storage)
            const estaEnFavorito = parsedStorage.includes(this.props.peliculas.id)
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
            parsedStorage.push(Number(this.props.peliculas.id)) //FIJARSE LO DE NUMBER, CAPAZ NO FUNCIONA
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', stringStorage)
        }else{
            const primerFavorito = [this.props.peliculas.id]
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
        const restoFavoritos = parsedStorage.filter(alf => alf !== this.props.peliculas.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem('favoritos', stringStorage)
        this.setState({
            esFavorito: false
        })
    }

    guardarDetalle(){
        const detalleID = [this.props.peliculas.id]
        const detalleString = JSON.stringify(detalleID)
        localStorage.setItem('detalle', detalleString)
    }

    render(){
        const {poster_path, title, overview,id} = this.props.peliculas
        return(
            <article className="peliculas-card">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="imagen" />
                <h2>{title} </h2> 
                <p className='more' onClick={()=> this.setState({
                    mostrarMas: !this.state.mostrarMas
                })}>Ver Descripcion</p>
                {
                    this.state.mostrarMas &&
                    <p>
                        {overview}
                    </p>
                }
                <Link to='/Detalle' onClick={() => this.guardarDetalle()}><p className='detail'>Ir a detalle</p></Link>
                
                <div className= 'corazon' onClick={()=> this.state.esFavorito ? this.quitarFavoritos() : this.agregarAFavoritos() }>
                    {this.state.esFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                </div>

            </article>
        )
    }

}

export default PeliculasCard