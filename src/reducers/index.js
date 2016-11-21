import { combineReducers } from 'redux';
import * as types from '../actions';

const data = (state = {}, action) => {
  switch (action.type) {
    case types.PENDING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.LOGGEDIN:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.data.user
      });
    case types.LOGGEDOUT:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.data.user
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
