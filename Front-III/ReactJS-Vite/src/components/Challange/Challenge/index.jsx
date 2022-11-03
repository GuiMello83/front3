export function ChallengeItemHeader(props){
    return(
        <header>
        {/* Utilização da Interpolação para exibirmos a Imagem do Autor do Post */}
        <img src={props.inicio.author.picture} />
        <div>
            {/* Utilização da Interpolação para exibirmos o Nome do Autor do Post */}
            <h1>{props.inicio.author.name}</h1>
            {/* Utilização da Interpolação para exibirmos a Localização do Post */}
            <h2>{props.inicio.location}</h2>
        </div>
    </header>
    )
}