import { handleActions } from 'redux-actions';
import actions from '../actions';

const KEY = 'activeAlerts';

export default defaultState => {
  const reducer = handleActions(
    {
      [actions.create]: (state, { payload: { id } }) => state.push(id),

      [actions.dismiss]: (state, { payload: { id } }) =>
        state.filterNot(alertId => alertId === id),

      [actions.dismissAll]: () => defaultState,
    },
    defaultState,
  );

  reducer.key = KEY;

  return reducer;
};
