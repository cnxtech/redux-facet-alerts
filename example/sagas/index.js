import { all, fork } from 'redux-saga/effects';
import { alertSaga } from '../../src/immutable';
import users from './users';
import posts from './posts';

export default function*() {
  yield all([alertSaga, users, posts].map(fork));
}
