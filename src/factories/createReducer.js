import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import actions from '../actions';
import { hasFacet } from '@bandwidth/redux-facet';

export const ALERTS_KEY = 'reduxFacetAlerts';

export default defaultState => {
  const reducer = handleActions(
    {
      [actions.create]: (state, { payload }) =>
        state.set(payload.id, fromJS(payload)),

      [actions.dismiss]: (state, { payload: { id } }) => state.delete(id),

      [actions.dismissAll]: (state, action) => {
        // if no facet name is present, this action
        // resets all alerts globally
        if (!hasFacet()(action)) {
          return defaultState;
        }
        return state;
      },
    },
    defaultState,
  );

  reducer.key = ALERTS_KEY;

  return reducer;
};
