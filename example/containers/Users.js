import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import facet from '@bandwidth/redux-facet/immutable';
import withAlerts from '../../src/immutable';
import { createStructuredSelector } from 'reselect';
import userActions from '../actions/users';
import userSelectors from '../selectors/users';
import View from '../components/Users';

export default compose(
  connect(
    createStructuredSelector({
      users: userSelectors.selectList(),
      loading: userSelectors.selectLoading(),
    }),
  ),
  facet('users', dispatch =>
    bindActionCreators({ list: userActions.list.pending }, dispatch),
  ),
  withAlerts(),
)(View);
