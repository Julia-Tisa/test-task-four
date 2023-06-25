import { combineReducers } from 'redux';
import theme from './slices/themeSlice';
import auth from './slices/authSlice';
import scheduler from './slices/schedulerSlice';

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    scheduler,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
