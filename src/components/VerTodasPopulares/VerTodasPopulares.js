import { Component } from "react";
import PeliculasCard from "../PeliculasCard/PeliculasCard";
import './VerTodasPopulares.css'
import Loader from '../Loader/Loader'

class VerTodasPopulares extends Component {
    constructor(props){
        super(props)
        this.state={
            Peliculas: [],
            filteredPeliculas: [],
            filterValue:'',
            actualPage: 2

        }
    }
    componentDidMount(){
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState(
            {Peliculas: data.results, filteredPeliculas:data.results}
            
        )})
        .catch(error => console.log(error))
    }
    handleFilter(e){
        const userValue= e.target.value
        this.setState({
            filterValue: userValue,
            filteredPeliculas: this.state.Peliculas.filter(peliculas=>
                peliculas.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }
    handleResetFilter(){
        this.setState({
            filterValue:'',
            filteredPeliculas: this.state.Peliculas
        })
    }
    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.state.actualPage}&sort_by=popularity.desc&api_key=26cb00ba0e4d52cae073a420c45e2d99`)
        .then(response => response.json())
        .then(data => {
            this.setState(
            {Peliculas: this.state.Peliculas.concat(data.results), filteredPeliculas:this.state.filteredPeliculas.concat(data.results), actualPage: this.state.actualPage + 1 }
            
        )})
        .catch(error => console.log(error))

    }
    render(){
        const {filteredPeliculas} = this.state
        return(
        <section className="populares-card">
            <div className="filter-container">
                <input 
                    type='text' 
                    value={this.state.filterValue} 
                    onChange={(e) => this.handleFilter(e)} 
                />
                <button onClick={() => this.handleResetFilter()}>Reset Filter</button>
            </div>
            <div className="peliculas-list">
                {filteredPeliculas.length > 0 ? (
                    filteredPeliculas.map((peliculas, idx) => (
                        <PeliculasCard key={idx} peliculas={peliculas} />
                    ))
                ) : (
                    <Loader/>
                )}
            </div>
            <div className="load-more-container">
                <button onClick={() => this.handleLoadMore()}>Cargar Más</button>
            </div>
        </section>
            
        )
    }
}




export default VerTodasPopulares