import { createSelector } from 'reselect';
import { selectors } from '@bandwidth/redux-facet';
import globalReducer from './alertGlobalReducer';
import facetReducer from './alertReducer';
import _ from 'lodash';

const selectGlobalAlertsCollection = () => state => state[globalReducer.key];

const selectAlertIds = facetName =>
  createSelector(
    selectors.createFacetStateSelector(facetName),
    facetState => facetState[facetReducer.key],
  );

const selectAlertsList = facetName =>
  createSelector(
    selectGlobalAlertsCollection(),
    selectAlertIds(facetName),
    (alerts, ids) =>
      ids.map(id => alerts[id]).filter(alert => !_.isUndefined(alert)),
  );

export default {
  /**
     * @deprecated, prefer #createGlobalAlertsCollectionSelector as it is more idiomatic
     */
  selectGlobalAlertsCollection,
  createGlobalAlertsCollectionSelector: selectGlobalAlertsCollection,
  /**
     * @deprecated, prefer #createAlertIdsSelector as it is more idiomatic
     */
  selectAlertIds,
  createAlertIdsSelector: selectAlertIds,
  /**
     * @deprecated, prefer #createAlertsListSelector as it is more idiomatic
     */
  selectAlertsList,
  createAlertsListSelector: selectAlertsList,
};
