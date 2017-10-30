import { combineReducers } from 'redux-immutable';
import { alertGlobalReducer, alertViewReducer } from '../../src/immutable';
import { combineFacetReducers } from '@bandwidth/redux-facet/immutable';
import posts from './posts';
import users from './users';

export default combineReducers({
  /**
   * Our facet reducers live here.
   * Facets in this example are designed to only be concerned with facet-specific
   * state; in this case, just our alerts. That's by design.
   *
   * By placing the users and posts data in general reducers, we keep
   * our app data normalized and easily shared between views. It's traditional
   * redux.
   *
   * But our facets are very specific to a particular view, and they
   * apply generalized behaviors (like our alerts) to those views in an isolated way.
   *
   * Our containers will assemble all this data together to create their
   * final picture of the data they are presenting.
   */
  [combineFacetReducers.key]: combineFacetReducers({
    users: combineReducers({
      [alertViewReducer.key]: alertViewReducer,
    }),
    posts: combineReducers({
      [alertViewReducer.key]: alertViewReducer,
    }),
  }),
  // be sure to include the global alert collection!
  [alertGlobalReducer.key]: alertGlobalReducer,

  // our 'traditional' redux data reducers
  posts,
  users,
});
