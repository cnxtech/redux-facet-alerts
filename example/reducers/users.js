import { handleActions } from 'redux-actions';
import actions from '../actions/users';
import { fromJS } from 'immutable';

export default handleActions(
  {
    [actions.list.pending]: state => state.set('loading', true),
    [actions.list.complete]: (state, { payload: { users } }) =>
      state.set('list', fromJS(users)).set('loading', false),
    [actions.list.failed]: state => state.set('loading', false),
  },
  fromJS({ loading: false, list: [] }),
);
