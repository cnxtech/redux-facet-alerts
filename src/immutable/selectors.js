import { createSelector } from 'reselect';
import { selectors } from '@bandwidth/redux-facet/immutable';
import facetReducer from './alertReducer';
import * as utils from '../selectorUtils';
import _ from 'lodash';

const selectAlertsFromFacetState = facetState =>
  facetState.get(facetReducer.key).toJS();

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
