import { Component } from "react";
import PeliculasCard from "../PeliculasCard/PeliculasCard";
import './VerTodasPopulares.css'
class VerTodasPopulares extends Component {
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
        return(
            <section className="populares-card">
                {
                    Peliculas.length > 0 ? (
                        Peliculas.map((peliculas, idx)=>(
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




export default VerTodasPopulares