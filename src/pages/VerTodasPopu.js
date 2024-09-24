import VerTodasPopulares from "../components/VerTodasPopulares/VerTodasPopulares"
const VerTodasPopu = () =>{
    return(
        <>
            <h1>Peliculas Populares</h1>
            <VerTodasPopulares url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=26cb00ba0e4d52cae073a420c45e2d99'/>
        </>
    )
}


export default VerTodasPopu