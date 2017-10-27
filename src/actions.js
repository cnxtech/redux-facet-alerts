import { createActions } from 'redux-actions';
import uuid from 'uuid';

const generateAlertId = timestamp =>
  `alert-${timestamp}-${uuid().substring(0, 18)}`;
const createTimestamp = () => new Date().getTime();

export default createActions({
  CREATE: (message, attributes) => {
    const timestamp = createTimestamp();
    return {
      id: generateAlertId(timestamp),
      timestamp,
      message,
      attributes,
    };
  },
  DISMISS: id => ({ id }),
  DISMISS_ALL: () => ({}),
});
