import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            valor:""
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambios(event){
        this.setState({
            valor: event.target.value
        })
    }
    buscar(){
        this.props.history.push(''/* aca iria la pag de search */ ,{valor: this.state.valor})

    }
    render(){
        return(
            <div>
                <form onSubmit={(event)=> this.evitarSubmit(event)} >
                    <input type='text' onChange={(event)=> this.controlarCambios(event)} name='valor' value={this.state.valor}/>
                <button onClick={()=>this.buscar()}>Buscar</button>
                </form>
            </div>
        )
    }
}

export default Form