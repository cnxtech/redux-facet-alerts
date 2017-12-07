import { createSelector } from 'reselect';
import { FACET_REDUCER_KEY } from '../constants';
import * as utils from '../selectorUtils';
import _ from 'lodash';

export default facetSelectors => {
  const selectAlertsFromFacetState = facetState =>
    facetState[FACET_REDUCER_KEY];

  const createAlertsSelector = facetName =>
    createSelector(
      facetSelectors.createFacetStateSelector(facetName),
      selectAlertsFromFacetState,
    );

  const createAlertsListSelector = facetName =>
    createSelector(createAlertsSelector(facetName), utils.toSortedList);

  const createAlertSelectorCreator = alertId => facetName =>
    createSelector(createAlertsSelector(facetName), alerts => alerts[alertId]);

  const selectAlertsListFromFacetState = createSelector(
    selectAlertsFromFacetState,
    utils.toSortedList,
  );

  return {
    createAlertsSelector,
    createAlertsListSelector,
    createAlertSelectorCreator,

    selectAlertsFromFacetState,
    selectAlertsListFromFacetState,
  };
};
