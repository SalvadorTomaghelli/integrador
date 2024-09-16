import Container from "../components/Container/Container";

const Home= () => {
    return(
        <>
            <h2>Peliculas Populares</h2>
            <Container url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=26cb00ba0e4d52cae073a420c45e2d99'/>
            <h2>Peliculas en Cartel</h2>
            <Container url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=26cb00ba0e4d52cae073a420c45e2d99'/>
            
        </>
    )
}

export default Home;