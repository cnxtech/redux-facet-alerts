import { fromJS } from 'immutable';

export default {
  selectList: () => state => state.getIn(['users', 'list'], fromJS([])).toJS(),
  selectLoading: () => state => state.getIn(['users', 'loading'], false),
};
