import './style.scss'
import gaudi from './../../assets/Image/IMG-20190616-WA0042.jpg'
import poa from './../../assets/Image/IMG-20190305-WA0037.jpg'

export function QuartaAula() {

    const componentsFinded = [
        {
            id: 1,
            title: 'Imagem Gaudí',
            image: gaudi,
            text: 'Loren ipsum, dolor sit.'
        },
        {
            id: 2,
            title: 'Imagem escultura POA',
            image: poa,
            text: 'Loren ipsum, dolor sit.'
        }
    ]


    return (
        <div className="quarta-aula-component">

            <h1 className="main-title">Componentes identificados</h1>

            <ul className='components-finded'>

                {

                    componentsFinded.map(
                        component => {
                            return (
                                <li key={component.id}>
                                    <img src={component.image} alt="" />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        }
                    )

                }



            </ul>

        </div>

    )

}