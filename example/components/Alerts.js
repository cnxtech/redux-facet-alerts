import React from 'react';

const containerStyles = {
  padding: '8px',
  border: '1px solid blue',
  background: 'lightblue',
  color: 'blue',
  marginBottom: '8px',
};

export default ({ alerts, dismissAlert, dismissAllAlerts }) =>
  alerts.length ? (
    <div style={containerStyles}>
      Alerts{' '}
      <span onClick={dismissAllAlerts} style={{ cursor: 'pointer' }}>
        (dismiss all)
      </span>
      <ul>
        {alerts &&
          alerts.map(a => (
            <li key={a.id}>
              {a.message}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => dismissAlert(a.id)}
              >
                (dismiss)
              </span>
            </li>
          ))}
      </ul>
    </div>
  ) : null;
