import {combineReducers, createStore} from "redux";

// Reducers
import {terminalsReducer} from "./terminalsReducer";
import {authReducer} from "./authReducer";
import {buyersReducer} from "./buyersReducer";




const reducers = combineReducers({
        terminals: terminalsReducer,
        auth: authReducer,
        buyers: buyersReducer,
    }
);

const store = createStore(reducers);

export default store