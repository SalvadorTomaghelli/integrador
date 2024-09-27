import { Component } from "react";
//import FavoritosContainer from "../components/FavoritosContainer/FavoritosContainer";
import PeliculasCard from "../components/PeliculasCard/PeliculasCard";
import Loader from '../components/Loader/Loader'
class Favoritos extends Component  {
    constructor(props){
        super(props);
            this.state = {
                peliculas:[],
                Cargando: true
            }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if(storage !== null){
            const parsedStorage = JSON.parse(storage);
            console.log("este es el parsedsotrage",parsedStorage)
            Promise.all(
                parsedStorage.map((id) =>
                    fetch(
                        `https://api.themoviedb.org/3/movie/${id}?api_key=26cb00ba0e4d52cae073a420c45e2d99`
                    ).then((response) => response.json())
                )
            ).then((peliculas) => {
                this.setState({
                    peliculas, Cargando: false
            });
        })
            
        }
    }
        render() {
            const {Cargando} = this.state;
    
            if (Cargando) {
                return <Loader/>;
            }
    
            return (
                <div>
                    <h1>Favoritos</h1>
                    {this.state.peliculas.length === 0 ? (
                        <p>No hay favoritos.</p>
                    ) : (
                        <section className = "section-card">
                            {this.state.peliculas.map(peliculas => (
                                <section key={peliculas.id} className = "">
                                    <PeliculasCard peliculas={peliculas}  />
                                </section>
                            ))}
                        </section>
                    )}
                </div>
            );
        }
    
    
}

export default Favoritos