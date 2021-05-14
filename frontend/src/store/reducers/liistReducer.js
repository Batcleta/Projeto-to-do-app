import {LISTA_ATUALIZADA} from '../actions/actionType'

const initialState = {
    list: null
}

export default function (state= initialState,action){
    switch (action.type) {
        case LISTA_ATUALIZADA:
            return{
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}