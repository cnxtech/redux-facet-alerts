import React from 'react';

export default ({ users, createAlert, list }) => (
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
    <button onClick={list}>Fetch</button>
  </div>
);
