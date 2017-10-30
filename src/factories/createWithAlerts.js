import actions from '../actions';
import { connect as defaultConnect } from 'react-redux';

export default selectors => (options = { connect: defaultConnect }) => {
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

  return options.connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    // pass through connect options from HOC options
    _.pick(options, [
      'pure',
      'areStatesEqual',
      'areOwnPropsEqual',
      'areStatePropsEqual',
      'areMergedPropsEqual',
      'storeKey',
    ]),
  );
};
