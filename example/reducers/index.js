import { combineReducers } from 'redux-immutable';
import { alertGlobalReducer } from '../../src/immutable';
import { facetReducer } from '@bandwidth/redux-facet/immutable';
import posts from './posts';
import users from './users';

export default combineReducers({
  posts: facetReducer('posts', posts),
  users: facetReducer('users', users),
  [alertGlobalReducer.key]: alertGlobalReducer,
});
