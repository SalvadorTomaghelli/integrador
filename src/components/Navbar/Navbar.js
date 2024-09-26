import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar= () =>{
    return(
        <div >
             <ul>
                <img src='./img/logo.png' alt='logo' className='Logo'/>
            </ul>
            <ul className='main-nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/favoritos'>Favoritos</Link></li>
                <li><Link to='/populares'>Populares</Link></li>
                <li><Link to='/cartelera'>Cartelera</Link></li>
            </ul>

        </div>
           
    )
    
}

export default Navbar;