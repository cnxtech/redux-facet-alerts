import { createActions } from 'redux-actions';
import uuid from 'uuid';

const generateAlertId = timestamp =>
  `alert-${timestamp}-${uuid().substring(0, 18)}`;
const createTimestamp = () => new Date().getTime();

const actions = createActions({
  CREATE_FACET_ALERT: (message, attributes) => {
    const timestamp = createTimestamp();
    return {
      id: generateAlertId(timestamp),
      timestamp,
      message,
      attributes,
    };
  },
  DISMISS_FACET_ALERT: id => ({ id }),
  DISMISS_ALL_FACET_ALERTS: () => ({}),
});

export default {
  create: actions.createFacetAlert,
  dismiss: actions.dismissFacetAlert,
  dismissAll: actions.dismissAllFacetAlerts,
};
