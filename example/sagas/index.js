import { all, fork } from 'redux-saga/effects';
import users from './users';
import posts from './posts';

export default function*() {
  yield all([users, posts].map(fork));
}
