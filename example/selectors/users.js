// this is a facet selector, so it assumes a substate is available.
import { fromJS } from 'immutable';

export default {
  selectList: () => users => users.get('list', fromJS([])).toJS(),
  selectLoading: () => users => users.get('loading', false),
};
