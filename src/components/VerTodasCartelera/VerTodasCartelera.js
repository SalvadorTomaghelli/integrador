import { Component } from "react";
import PeliculasCard from "../PeliculasCard/PeliculasCard";
import './VerTodasCartelera.css'
import '../VerTodasPopulares/VerTodasPopulares.css'

class VerTodasCartelera extends Component {
    constructor(props){
        super(props)
        this.state={
            Peliculas: [],
            PeliculasFiltradas: [],
            Filtrado: '',
            PaginaActual: 2
        }
    }
    componentDidMount(){
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState(
            {Peliculas: data.results, PeliculasFiltradas: data.results}
            
        )})
        .catch(error => console.log(error))
    }

    handleFilter(e){
        const userValue = e.target.value
        this.setState({
            Filtrado: userValue,
            PeliculasFiltradas: this.state.Peliculas.filter((peliculas) => peliculas.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }

    handleResetFilter(){
        this.setState({
            Filtrado: '',
            PeliculasFiltradas: this.state.Peliculas
        })
    }

    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.state.PaginaActual}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=26cb00ba0e4d52cae073a420c45e2d99`)
        .then(response => response.json())
        .then(data => {
            this.setState(
                {Peliculas: this.state.Peliculas.concat(data.results),PeliculasFiltradas: this.state.PeliculasFiltradas.concat(data.results), PaginaActual:this.state.PaginaActual +1}
            )
        })
        .catch(error => console.log(error))
    }

    render(){
        const {PeliculasFiltradas} = this.state
        return(
            <>

    <div className="div-filtro">
        <input type='text' value={this.state.Filtrado} onChange={(e) => this.handleFilter(e)}/>
        
        <button onClick={() => this.handleResetFilter()}>Reset Filter</button>
    
    </div>
    
            <section className="peliculas-list">
                {
                    PeliculasFiltradas.length > 0 ? (
                        PeliculasFiltradas.map((peliculas, idx)=>(
                            <PeliculasCard key={idx} peliculas={peliculas} />
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )
                }
                
            </section>
            <div className="load-more-container">
                <button onClick={() => this.handleLoadMore()}>Cargar Mas</button>
            </div>
            </>
        )
    }
}

export default VerTodasCartelera