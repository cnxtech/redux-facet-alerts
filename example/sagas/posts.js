import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { facetSaga } from '@bandwidth/redux-facet/immutable';
import { alertActions } from '../../src/immutable';
import actions from '../actions/posts';

export default facetSaga('posts', actions.create.pending.toString(), function*(
  channel,
) {
  function* handleCreatePending(action) {
    yield call(delay, 1000);
    yield put(channel, actions.create.complete({ post: action.payload.post }));
    yield put(channel, alertActions.create('Post created'));
  }

  yield takeEvery(channel, handleCreatePending);
});
