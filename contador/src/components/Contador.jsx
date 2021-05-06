import './Contador.css'

import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div className="Contador">
                
                {/*Parao o componente Display somente a inserção foi o suficiente*/}
                <Display numero={this.state.numero} />

                {/*  Para o componente PassoForm foi realizada uma comunicação direta pro meio da props passo
                     E uma comunicação indireta (a partir do Pai (Contador)) por meio da
                    props setPasso (do Filho (PassoForm)) que recebeu a função setPasso (tanto faz ter o mesmo nome)
                    que por sua vez, passou o valor lido pelo input como parâmetro da função setPasso (como novoPasso)
                    alterando assim o estado do componente Pai (passo do Contador)
                */}
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>


                {/*  Para o componente Botoes foi necessario passar as funções
                    inc e dec em suas respectivas props.
                     Nesse caso, ocorre uma comunicação indireta porque quando o button (do componente Filho)
                    é clicado ele altera um estado do componente Pai pro meio da função que foi passada. 
                */}
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}
export default Contador