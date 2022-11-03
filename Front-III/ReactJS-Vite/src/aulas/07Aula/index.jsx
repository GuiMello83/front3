import { useState } from 'react'
import './style.scss'

export function SetimaAula() {

    /* let contador = 0 */
    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(false)

    function somarNumero(){

        setContador(contador + 1)

    }

    function mudarTema(){
        setTemaEscuro(!temaEscuro)
    }

    return(

        <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>
            <h1>Contador</h1>
            <button onclick={() => mudarTema()}>Mudar Tema</button>
            <button onClick={somarNumero}>Adicionar</button>
            <span>Número atual: {contador}</span>
        </main>
    )
}