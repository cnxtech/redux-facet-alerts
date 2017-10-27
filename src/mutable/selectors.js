import { createSelector } from 'reselect';
import { selectors } from '@bandwidth/redux-facet';
import globalReducer from './alertGlobalReducer';
import facetReducer from './alertReducer';
import _ from 'lodash';

const selectAlertsCollection = () => state => state[globalReducer.key];

const selectAlertsListByFacetName = facetName =>
  createSelector(
    state => state,
    selectors.selectFacetState(facetName),
    selectSortedAlertsList(),
  );

const selectSortedAlertsList = () => (facetState, globalState) => {
  const alerts = selectAlertsCollection()(globalState);
  return (facetState[facetReducer.key] || [])
    .map(id => alerts[id])
    .filter(alert => !_.isUndefined(alert))
    .sort((a, b) => a.get('timestamp', 1) - b.get('timestamp', 0));
};

export default {
  selectAlertsCollection,
  selectSortedAlertsList,
  selectAlertsListByFacetName,
};
