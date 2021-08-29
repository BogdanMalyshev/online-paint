import {createStore} from "redux";
import {applicationReducer} from "./applicationReducer"


export default function storeConfig() {

    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return createStore(applicationReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    }

    return createStore(applicationReducer)
}