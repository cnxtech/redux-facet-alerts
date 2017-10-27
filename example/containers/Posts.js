import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import facet from '@bandwidth/redux-facet/immutable';
import withAlerts from '../../src/immutable';
import { createStructuredSelector } from 'reselect';
import postActions from '../actions/posts';
import postSelectors from '../selectors/posts';
import View from '../components/Posts';

export default compose(
  facet(
    'posts',
    createStructuredSelector({
      draft: postSelectors.selectDraft(),
      loading: postSelectors.selectLoading(),
    }),
    dispatch =>
      bindActionCreators(
        { create: postActions.create.pending, edit: postActions.edit },
        dispatch,
      ),
  ),
  withAlerts(),
)(View);
