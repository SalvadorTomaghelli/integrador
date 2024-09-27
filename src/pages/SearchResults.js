import { Component } from "react";
import PeliculasCard from "../components/PeliculasCard/PeliculasCard";
import Loader from '../components/Loader/Loader'


class SearchResults extends Component{
 constructor(props) {
    super(props);

    this.state={
        peliculasBusqueda: []
    }
 }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.valor}&api_key=26cb00ba0e4d52cae073a420c45e2d99`)
    .then(response => response.json())
    .then((data) => this.setState({
        peliculasBusqueda: data.results
    }))
    .catch(e => console.log(e))
}


 render(){
    const {peliculasBusqueda} = this.state

    if (peliculasBusqueda.length === 0){
        return(
            <h1>No se encontaron resultados para: {this.props.location.state.valor}</h1>
        )
    }

    return(
        <>
            <h1>
                Resultados de busqueda para: {this.props.location.state.valor}
            </h1>

            <section className="peliculas-list">
                {
                    peliculasBusqueda.length > 0 ? (
                        peliculasBusqueda.map((peliculas, idx)=>(
                            <PeliculasCard key={idx} peliculas={peliculas} />
                        ))
                    ) : (
                        <Loader/>
                    )
                }
                
            </section>
        </>
    )
}
}

export default SearchResults;