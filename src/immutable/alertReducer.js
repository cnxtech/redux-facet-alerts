import { handleActions } from 'redux-actions';
import actions from '../actions';
import { Map, fromJS } from 'immutable';
import createMount from './createMount';
import { FACET_REDUCER_KEY } from '../constants';

const reducer = handleActions(
  {
    [actions.create]: (state, { payload }) =>
      state.set(payload.id, fromJS(payload)),

    [actions.dismiss]: (state, { payload: { id } }) => state.remove(id),

    [actions.dismissAll]: () => new Map(),
  },
  new Map(),
);

reducer.key = FACET_REDUCER_KEY;

/**
 * Enables users to simply call a function to attach alert reducer
 * functionality to an existing reducer under the correct key.
 *
 * @returns an enhanced reducer
 */
reducer.mount = createMount(reducer);

export default reducer;
