import { put } from 'redux-saga/effects';
import actions from './actions';

export default saga =>
  function*(channel, enhancements) {
    const createAlert = alert => put(channel, actions.create({ ...alert }));
    const dismissAlert = id => put(channel, actions.dismiss({ id }));
    const dismissAllAlerts = () => put(channel, actions.dismissAllForFacet());
    yield* saga(channel, {
      ...enhancements,
      createAlert,
      dismissAlert,
      dismissAllAlerts,
    });
  };
