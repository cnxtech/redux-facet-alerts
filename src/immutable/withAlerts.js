import createWithAlerts from '../factories/createWithAlerts';
import selectors from './selectors';
import facet, { withFacetData } from '@bandwidth/redux-facet/immutable';

export default createWithAlerts(selectors, facet, withFacetData);
