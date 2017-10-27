import { createActions } from 'redux-actions';

export default createActions({
  LIST: {
    PENDING: () => ({}),
    COMPLETE: users => ({ users }),
    FAILED: error => ({ error }),
  },
});
