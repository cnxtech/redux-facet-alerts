import React from 'react';

export default ({ users, createAlert, list, loading }) => (
  <div>
    <ul>
      {users.length ? (
        users.map(u => (
          <li
            key={u.name}
            onClick={() => createAlert(`Clicked ${u.name}`)}
            style={{ cursor: 'pointer' }}
          >
            {u.name}
          </li>
        ))
      ) : (
        <li>No users</li>
      )}
    </ul>
    <button onClick={list}>{loading ? 'Loading' : 'Fetch'}</button>
  </div>
);
