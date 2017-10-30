import React from 'react';

export default ({ draft, create, edit, loading }) => (
  <form
    onSubmit={ev => {
      ev.preventDefault();
      create(draft);
    }}
  >
    <textarea value={draft} onChange={ev => edit(ev.target.value)} />
    <br />
    <button type="submit">{loading ? 'Loading' : 'Create'}</button>
  </form>
);
