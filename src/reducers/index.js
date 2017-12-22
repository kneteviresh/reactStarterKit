import {combineReducers} from 'redux';
import repository from './repositories';

const rootReducer = combineReducers({
    
    repository: repository
});
export default rootReducer;
