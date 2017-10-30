import React from 'react';
import Alerts from './Alerts';
import UsersList from './UsersList';

const containerStyles = {
  padding: '8px',
  flex: '3',
  border: '1px solid darkgray',
};

export default ({
  users,
  alerts,
  dismissAlert,
  dismissAllAlerts,
  createAlert,
  list,
  loading,
}) => (
  <div style={containerStyles}>
    <Alerts
      alerts={alerts}
      dismissAlert={dismissAlert}
      dismissAllAlerts={dismissAllAlerts}
    />
    <h3>Users (click to create alert)</h3>
    <UsersList
      users={users}
      list={list}
      createAlert={createAlert}
      loading={loading}
    />
  </div>
);
