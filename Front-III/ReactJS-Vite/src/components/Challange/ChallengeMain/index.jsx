export function ChallengeMainItem(props){
<main>
                                        {/* Utilização da Interpolação para exibirmos a Imagem do Post */}
                                        <img src={props.allmain.media} />
                                        <section className='post-infos'>
                                            {/* Utilização da Interpolação para exibirmos a Quantidade de Likes do Post */}
                                            <span className='likeds'>Curtido por {props.allmain.likes} pessoas</span>
                                            {/* Utilização da Interpolação para exibirmos a Descrição do Post */}
                                            <p className='description'>{props.allmain.description}</p>
                                        </section>
                                        <ul className='comments'>

                                            {
                                                // Map realizado no Array de Comentários que existe dentro de cada Post, com ele iremos replicar a Interface abaixo quantas vezes for necessário até exibirmos todos os comentários
                                                props.allmain.comments.map(

                                                    // Comment é o nome da Variavel Temporária que irá receber cada item do nosso Array de Comentários, iremos utiliza-la para obter o conteúdo do Comentário em questão e exibi-lo na interface logo abaixo :)
                                                    comment => {

                                                        return (

                                                            <li>
                                                                {/* Utilização da Interpolação para exibirmos o Nome do Autor do Comentário */}
                                                                <h1>{comment.author.name}</h1>
                                                                {/* Utilização da Interpolação para exibirmos o Comentário */}
                                                                <p>{comment.text}</p>
                                                            </li>
                                                        )

                                                    }

                                                )

                                            }

                                        </ul>
                                    </main>
}