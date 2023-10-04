import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import HistoryReducer from './reducers/HistoryReducer';

const rootReducer = combineReducers({
    history: HistoryReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  export default store;