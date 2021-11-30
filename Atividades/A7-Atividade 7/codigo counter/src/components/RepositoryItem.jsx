export function RepositoryItem (props){
    return (<li>
        <strong>{props.repository?.name?? 'Padrão'}</strong>
        <p>{props.repository?.description}</p>
        <a href={props.repository?.link}>acessar o repositório</a>
    </li>)
}