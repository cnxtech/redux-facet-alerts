import React from 'react';
import Alerts from './Alerts';
import PostEditor from './PostEditor';

const containerStyles = {
  padding: '8px',
  flex: '2',
  border: '1px solid darkgray',
};

export default ({
  draft,
  alerts,
  dismissAlert,
  dismissAllAlerts,
  create,
  edit,
}) => (
  <div style={containerStyles}>
    <Alerts
      alerts={alerts}
      dismissAlert={dismissAlert}
      dismissAllAlerts={dismissAllAlerts}
    />
    <h3>Create a post</h3>
    <PostEditor draft={draft} create={create} edit={edit} />
  </div>
);
