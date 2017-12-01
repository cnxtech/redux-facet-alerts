import { handleActions } from 'redux-actions';
import actions from '../actions';
import createMount from './createMount';
import createMount from './createMount';

import { FACET_REDUCER_KEY } from '../constants';

const reducer = handleActions(
  {
    [actions.create]: (state, { payload: { id } }) => state.push(id),

    [actions.dismiss]: (state, { payload: { id } }) =>
      state.filterNot(alertId => alertId === id),

    [actions.dismissAll]: () => [],
  },
  [],
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
