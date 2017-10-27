import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { selectors } from '@bandwidth/redux-facet/immutable';
import globalReducer from './alertGlobalReducer';
import facetReducer from './alertReducer';
import _ from 'lodash';

const selectAlertsCollection = () => state => state.get(globalReducer.key);

const selectAlertsListByFacetName = facetName =>
  createSelector(
    selectors.selectFacetState(facetName),
    state => state,
    selectSortedAlertsList(),
  );

const selectSortedAlertsList = () => (facetState, globalState) => {
  const alerts = selectAlertsCollection()(globalState);
  return facetState
    .get(facetReducer.key, fromJS([]))
    .map(id => alerts.get(id))
    .filter(alert => !_.isUndefined(alert))
    .sort((a, b) => a.get('timestamp', 1) - b.get('timestamp', 0))
    .toJS();
};

export default {
  selectAlertsCollection,
  selectSortedAlertsList,
  selectAlertsListByFacetName,
};
