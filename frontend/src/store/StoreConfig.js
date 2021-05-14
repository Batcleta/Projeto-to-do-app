import {createStore, combineReducers} from 'redux'

import listReducer from './reducers/liistReducer'
import descriptionReducer from "./reducers/descriptionReducer";

const reducers = combineReducers({
    description: descriptionReducer,
    list: listReducer
});

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;