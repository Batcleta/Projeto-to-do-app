import {DESC_ALTERADA} from './actionType'

//Action creator
export function alterarDescrição (novaDescrição){
    return{
        type: DESC_ALTERADA,
        payload: novaDescrição
    }
}