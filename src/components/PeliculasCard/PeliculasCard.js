import { Component } from "react";
import './PeliculasCard.css'

class PeliculasCard extends Component{
    constructor(props){
        super(props)
        this.state={
            mostrarMas: false
        }

    }
    render(){
        const {poster_path, title, overview} = this.props.peliculas
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
                <p>Ir a detalle</p>
                <p>Agregar a Favoritos</p>
                <p className='delete'>Borrar</p>
            </article>
        )
    }

}

export default PeliculasCard