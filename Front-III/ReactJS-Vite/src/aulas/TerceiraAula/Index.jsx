
import batataGif from "../../assets/Image/batata.gif";

export function TerceiraAula() {


    const components = [
        { name: 'Component Card', description: 'teste0', image: batataGif },
        { name: 'Component Card 2', description: 'teste1', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 3', description: 'teste2', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' }
    ]



    return (
        <div>
            <h1>Lista de componentes encontrados no sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>

                            <img src={component.image} />
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}