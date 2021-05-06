import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput"
                type="number"
                value={props.passo}
                // O parâmetro event é o evento da tag
            // O sinal de + converte o value (que por padrão é string) para number
            onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
}