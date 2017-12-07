import createWithAlerts from '../factories/createWithAlerts';
import selectors from './selectors';
import facet, { withFacetData } from '@bandwidth/redux-facet';

export default createWithAlerts(selectors, facet, withFacetData);
