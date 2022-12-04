import { useEffect } from 'react'
import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/15Aulaitem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {

        setCep(cepRecieved)

        if(cepRecieved.length === 8) {
            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                response.jason().then(
                    address => {

                        if(address.erro !== undefined){
                        console.log('Deu erro')
                        } else{
                            console.log('Deu certo')
                            setLocations([...locations, address])
                        }
                    }
                )     
                }
            )
        }
       
    }

   

    function deleteLocation(currentLocation){

        console.log(currentLocation)

    }

    return(

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                
                <button>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => {
                            return (
                                <DecimaQuintaAulaItem
                                    key={index}
                                    data={location}
                                    onDeleteLocation={() => deleteLocation(currentLocation)}
                                />
                            )
                        }
                    )
                }

            </section>

        </div>

    )

}