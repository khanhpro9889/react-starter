import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import ProfileReducer from './profile/reducer';
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    ProfileReducer
})

const middlewareEnhanced = applyMiddleware(thunk);
const composeEnhanced = compose(middlewareEnhanced, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(allReducers, composeEnhanced);

export default store;