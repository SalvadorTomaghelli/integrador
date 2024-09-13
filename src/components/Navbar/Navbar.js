import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar= () =>{
    return(
        <>
            <ul className='logo'>
                <img src='./img/descarga.jpg'/>
            </ul>
            <ul className='main-nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Favoritos'>Favoritos</Link></li>
                <li><Link to='/VerTodas'>Ver Todas</Link></li>
            </ul>
            
        </>
    )
    
}

export default Navbar;