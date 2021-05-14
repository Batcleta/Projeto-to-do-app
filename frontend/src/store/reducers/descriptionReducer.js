import {DESC_ALTERADA} from '../actions/actionType'

const initialState = {
    description: 'esta descrição é um teste de atualização de estado com reduz'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DESC_ALTERADA:
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}