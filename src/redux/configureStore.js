import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import user from "./modules/user";
import post from "./modules/post";
import image from "./modules/image";
import like from "./modules/like";
import comment from "./modules/comment";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user,
  post,
  image,
  like,
  comment,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
