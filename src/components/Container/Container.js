import { Component } from "react";
import PeliculasCard from "../PeliculasCard/PeliculasCard";
import '../Container/Container.css'

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            Peliculas: [],

        }
    }
    componentDidMount(){
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            this.setState(
            {Peliculas: data.results}
            
        )})
        .catch(error => console.log(error))
    }
    render(){
        const {Peliculas} = this.state
        const peliculasFiltradas= Peliculas.filter((pelicula,idx)=> idx < 5)
        return(
            <section className="section-card">
                {
                    peliculasFiltradas.length > 0 ? (
                        peliculasFiltradas.map((peliculas, idx)=>(
                            <PeliculasCard key={idx} peliculas={peliculas} />
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )
                }
            </section>
        )
    }
}




export default Container