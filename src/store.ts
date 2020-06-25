import { applyMiddleware, createStore } from "redux";

// import { createLogger } from "redux-logger";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

// const logger = createLogger(
    
// );
// ngRedux.configureStore(rootReducer, {}, [createLogger({collapsed: 'true'})]);

const middleware = applyMiddleware(promise, thunk);

export default createStore(reducer, middleware);