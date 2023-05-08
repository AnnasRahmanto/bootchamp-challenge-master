import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../store/reducer"

let store = null;
store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger())

    )
)

export default store;