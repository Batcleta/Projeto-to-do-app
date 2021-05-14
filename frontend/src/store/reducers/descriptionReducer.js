import {DESC_ALTERADA} from '../actions/actionType'
const initialState = {
    description: ''
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