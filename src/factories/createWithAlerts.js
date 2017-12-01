import actions from '../actions';
import { connect as defaultConnect } from 'react-redux';
import { pick, defaultsDeep } from 'lodash';

export default selectors => options => {
  const defaultedOptions = defaultsDeep(options, { connect: defaultConnect });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    createAlert: (message, attributes) =>
      ownProps.facetDispatch(actions.create(message, attributes)),
    dismissAlert: id => ownProps.facetDispatch(actions.dismiss(id)),
    dismissAllAlerts: () => ownProps.facetDispatch(actions.dismissAll()),
  });

  const mapStateToProps = (state, ownProps) => {
    return {
      alerts: selectors.createAlertsListSelector(ownProps.facetName)(state),
    };
  };

  return defaultedOptions.connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    // pass through connect options from HOC options
    pick(defaultedOptions, [
      'pure',
      'areStatesEqual',
      'areOwnPropsEqual',
      'areStatePropsEqual',
      'areMergedPropsEqual',
      'storeKey',
    ]),
  );
};
