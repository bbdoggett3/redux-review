import {createStore} from 'redux';
import movieReducer from './ducks/movieReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

export default createStore(movieReducer, devToolsEnhancer())