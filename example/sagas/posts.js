import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { facetSaga } from '@bandwidth/redux-facet/immutable';
import { alertActions } from '../../src/immutable';
import actions from '../actions/posts';

function* handleCreatePending(action) {
  yield call(delay, 1000);
  yield put(actions.create.complete({ post: action.payload.post }));
  yield put(alertActions.create('Post created'));
}

export default function*() {
  yield takeEvery(
    actions.create.pending.toString(),
    facetSaga(handleCreatePending),
  );
}
