import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { facetSaga } from '@bandwidth/redux-facet/immutable';
import { alertActions } from '../../src/immutable';
import actions from '../actions/users';

export default facetSaga('users', actions.list.pending.toString(), function*(
  channel,
) {
  function* handleListPending(action) {
    yield call(delay, 1000);
    yield put(
      channel,
      actions.list.complete([{ name: 'Bob' }, { name: 'Alice' }]),
    );
    yield put(channel, alertActions.create('Users list refreshed'));
  }

  yield takeEvery(channel, handleListPending);
});
