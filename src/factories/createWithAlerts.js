import actions from '../actions';
import { pick, defaultsDeep } from 'lodash';
import { compose } from '@bandwidth/redux-facet';

export default (selectors, facet, withFacetData) => () => {
  const mapFacetDispatchToProps = (dispatch, ownProps) => ({
    createAlert: (message, attributes) =>
      ownProps.facetDispatch(actions.create(message, attributes)),
    dismissAlert: id => ownProps.facetDispatch(actions.dismiss(id)),
    dismissAllAlerts: () => ownProps.facetDispatch(actions.dismissAll()),
  });

  const mapFacetStateToProps = facetState => {
    return {
      alerts: selectors.selectAlertsListFromFacetState(facetState),
    };
  };

  return compose(
    facet(mapFacetDispatchToProps),
    withFacetData(mapFacetStateToProps),
  );
};
