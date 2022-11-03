import './style.scss'
import gaudi from './../../assets/Image/IMG-20190616-WA0042.jpg'
import poa from './../../assets/Image/IMG-20190305-WA0037.jpg'
import { QuintaAulaItem } from '../../components/05AulaItem'

export function QuintaAula() {

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
        <div className="quinta-aula-component">
            <h1 className="main-title">Componentes identificados</h1>
            <ul className='components-finded'>
                {
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem 
                                key={component.id}
                                dado={component} 
                                    
                                />
                            )
                        }
                    )

                }
            </ul>
        </div>
    )
}

