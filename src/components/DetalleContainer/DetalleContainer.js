// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Component } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";


class DetalleContainer extends Component  {
    // Recuperar la película del localStorage
    constructor(props){
        super(props);
        
        let recuperoStorage = localStorage.getItem('peliculaDetalle');
        let peliculaRecuperada = JSON.parse(recuperoStorage);

        this.state = {
            peliculaRecuperada: peliculaRecuperada ? peliculaRecuperada.pelicula : {}
        }
    }

    componentWillUnmount() {
        localStorage.removeItem('peliculaDetalle');
    }   

    render() {
        const { peliculaRecuperada } = this.state;

        return (
            <div className="detalle-contenedor">
                <h1>Detalles de la Película</h1>

                {/* Mostrar la imagen */}
                {peliculaRecuperada.backdrop_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${peliculaRecuperada.backdrop_path}`}
                        alt={peliculaRecuperada.original_title}
                        style={{ width: "300px" }}
                    />
                ) : (
                    <p>No hay imagen disponible</p>
                )}

                {/* Mostrar el nombre de la película */}
                <p>Nombre: {peliculaRecuperada.original_title || 'No disponible'}</p>

                {/* Mostrar el rating de la película */}
                <p>Rating: {peliculaRecuperada.vote_average || 'No disponible'}</p>
                {/* Mostrar el genero de la pelicula */}
                <p>Genero: </p>
                {/* Mostrar la fecha de estreno */}
                <p>Fecha de estreno: {peliculaRecuperada.release_date || 'No disponible'}</p>
                {/* Mostrar la duración (si está disponible) */}
                <p><strong>Duración:</strong> {peliculaRecuperada.runtime ? `${peliculaRecuperada.runtime} minutos` : 'Duración no disponible'}</p>
                {/* Mostrar la sinopsis */}
                <p><strong>Sinopsis:</strong> {peliculaRecuperada.overview || 'No disponible'}</p>
            </div>
        );
    }
}

export default DetalleContainer