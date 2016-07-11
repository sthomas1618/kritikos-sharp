// http://marmelab.com/blog/2015/12/17/react-directory-structure.html

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import user from '../user/userReducer';
import product from '../product/productReducer';
import command from '../command/commandReducer';

const rootReducer = combineReducers({
  routing: routeReducer,
  user,
  product,
  command
});

export default rootReducer;