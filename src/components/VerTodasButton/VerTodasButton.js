import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Component } from "react";
import './VerTodasButton.css'

class VerTodasButton extends Component {
    constructor(props){
        super(props)
        this.state={
            ruta: ''
        }
    }
    

    render(){
        return(
            <div className="div-vertodas">
            <Link to={this.props.ruta}> <button> Ver todas </button> </Link>
            </div>
        )

    }
}


export default VerTodasButton;