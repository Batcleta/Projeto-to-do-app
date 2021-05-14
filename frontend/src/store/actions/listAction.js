import {LISTA_ATUALIZADA} from './actionType'

export function atualizarLista (novaLista){
    return{
        type: LISTA_ATUALIZADA,
        payload: novaLista
    }
}