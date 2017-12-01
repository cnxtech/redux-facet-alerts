import createReducer from '../factories/createReducer';
import { fromJS } from 'immutable';
import createMount from './createMount';
import { identity } from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions';
import { hasFacet } from '@bandwidth/redux-facet';
import { GLOBAL_REDUCER_KEY } from '../constants';

const reducer = handleActions(
  {
    [actions.create]: (state, { payload }) =>
      state.set(payload.id, fromJS(payload)),

    [actions.dismiss]: (state, { payload: { id } }) => state.delete(id),

    [actions.dismissAll]: (state, action) => {
      // if no facet name is present, this action
      // resets all alerts globally
      if (!hasFacet()(action)) {
        return fromJS({});
      }
      return state;
    },
  },
  fromJS({}),
);

reducer.key = GLOBAL_REDUCER_KEY;

/**
 * Enables users to simply call a function to attach alert reducer
 * functionality to their global reducer under the correct key.
 *
 * @returns an enhanced reducer
 */
reducer.mount = createMount(reducer);

export default reducer;
