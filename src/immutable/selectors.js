import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { selectors } from '@bandwidth/redux-facet/immutable';
import globalReducer from './alertGlobalReducer';
import facetReducer from './alertReducer';
import _ from 'lodash';

const selectGlobalAlertsCollection = () => state =>
  state.get(globalReducer.key);

const selectAlertIds = facetName =>
  createSelector(selectors.createFacetStateSelector(facetName), facetState =>
    facetState.get(facetReducer.key),
  );

const selectAlertsList = facetName =>
  createSelector(
    selectGlobalAlertsCollection(),
    selectAlertIds(facetName),
    (alerts, ids) =>
      ids
        .map(id => alerts.get(id))
        .filter(alert => !_.isUndefined(alert))
        .toJS(),
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
