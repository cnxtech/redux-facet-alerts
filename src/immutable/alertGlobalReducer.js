import createReducer from '../factories/createReducer';
import { fromJS } from 'immutable';
import createMount from './createMount';

const reducer = createReducer(fromJS({}));

/**
 * Enables users to simply call a function to attach alert reducer
 * functionality to their global reducer under the correct key.
 *
 * @returns an enhanced reducer
 */
reducer.mount = createMount(reducer);

export default reducer;
