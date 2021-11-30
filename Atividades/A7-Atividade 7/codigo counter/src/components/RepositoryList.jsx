import { RepositoryItem } from "./RepositoryItem"
import { Counter } from "./Counter"
const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "http://github.com/Irina-Chang"
}
export function RepositoryList(){
    return(
       <>
                <RepositoryItem repository={repository}/>
                <Counter/>
            </>
        
    )
}