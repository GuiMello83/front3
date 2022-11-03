import './style.scss'

export function NewGG(props) {
    
    return (
        <div className="cardConteiner">
        <img src={props.dado.picture} alt="" />
        <li className="fl2"> 
            <h1>{props.dado.name}</h1>
            <p>{props.dado.plataforms}</p>
            <p>{props.dado.categories}</p>
            <p>{props.dado.price}</p>
        </li>
        </div>
    )
}