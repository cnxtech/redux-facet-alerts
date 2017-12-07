import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { facetSaga } from '@bandwidth/redux-facet/immutable';
import { alertActions } from '../../src/immutable';
import actions from '../actions/users';

function* handleListPending(action) {
  yield call(delay, 1000);
  yield put(actions.list.complete([{ name: 'Bob' }, { name: 'Alice' }]));
  yield put(alertActions.create('Users list refreshed'));
}

export default function*() {
  yield takeEvery(
    actions.list.pending.toString(),
    facetSaga(handleListPending),
  );
}
