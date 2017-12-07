import { createSelector } from 'reselect';
import { selectors } from '@bandwidth/redux-facet';
import facetReducer from './alertReducer';
import * as utils from '../selectorUtils';
import _ from 'lodash';

const selectAlertsFromFacetState = facetState => facetState[facetReducer.key];

const createAlertsSelector = facetName =>
  createSelector(
    selectors.createFacetStateSelector(facetName),
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

export default {
  createAlertsSelector,
  createAlertsListSelector,
  createAlertSelectorCreator,

  selectAlertsFromFacetState,
  selectAlertsListFromFacetState,
};
