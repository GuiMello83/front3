import './style.scss'

export function QuintaAulaItem(props) {
    console.log(props)
    return (
        <li> 
            <img src={props.dado.image} alt="" />
            <h1>{props.dado.title}</h1>
            <p>{props.dado.text}</p>
        </li>

    )
}



