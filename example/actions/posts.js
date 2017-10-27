import { createActions } from 'redux-actions';

export default createActions({
  CREATE: {
    PENDING: post => ({ post }),
    COMPLETE: post => ({ post }),
    FAILED: error => ({ error }),
  },
  EDIT: ({ draft }) => ({ draft }),
});
