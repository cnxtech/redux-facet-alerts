import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Users from './containers/Users';
import Posts from './containers/Posts';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <div style={{ fontFamily: 'sans-serif', padding: '12px' }}>
      <h1>redux-facet-alerts example app</h1>
      <p>
        In this example app, we see how individual facets can wire in alerts,
        which are managed per-facet. Alerts are created by the view (via passed
        in props) or by sagas (via provided effects).
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          height: '100%',
        }}
      >
        <Users />
        <Posts />
      </div>
    </div>
  </Provider>,
  document.getElementById('main'),
);
