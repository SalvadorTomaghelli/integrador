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
            favorito:false
        }
    
    }
    favoritos(){
        this.setState({
            favorito:!this.state.favorito
        })
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
                <Link to={`/Peliculas/${id}`}><p className='detail'>Ir a detalle</p></Link>
                
                <p className='favoritos'>
                    {this.state.favorito ? 'Añadido a Favoritos' : 'Agregar a Favoritos'}
                </p>
                {
                    <div className='corazon' onClick={()=>this.favoritos()} >{this.state.favorito ? <FaHeart size={20}/>:<FaRegHeart/>}</div>
                }
            </article>
        )
    }

}

export default PeliculasCard