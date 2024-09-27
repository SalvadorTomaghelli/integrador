import { Component } from "react";
//import FavoritosContainer from "../components/FavoritosContainer/FavoritosContainer";
import PeliculasCard from "../components/PeliculasCard/PeliculasCard";

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
                return <h1>Cargando...</h1>;
            }
    
            return (
                <div>
                    <h1>Favoritos</h1>
                    {this.state.peliculas.length === 0 ? (
                        <h2>No hay favoritos.</h2>
                    ) : (
                        <section className = "peliculas-list">
                            {this.state.peliculas.map(peliculas => (
                                
                                    <PeliculasCard peliculas={peliculas}  />
                                
                            ))}
                        </section>
                    )}
                </div>
            );
        }
    
    
}

export default Favoritos