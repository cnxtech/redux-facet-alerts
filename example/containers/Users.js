import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import facet from '@bandwidth/redux-facet/immutable';
import withAlerts from '../../src/immutable';
import { createStructuredSelector } from 'reselect';
import userActions from '../actions/users';
import userSelectors from '../selectors/users';
import View from '../components/Users';

export default compose(
  facet(
    'users',
    createStructuredSelector({
      users: userSelectors.selectList(),
      loading: userSelectors.selectLoading(),
    }),
    dispatch =>
      bindActionCreators({ list: userActions.list.pending }, dispatch),
  ),
  withAlerts(),
)(View);
