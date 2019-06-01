import React from 'react';

export default function LaunchItem({ user: { id, username } }) {
  return (
    <div>
      {id} {username}
    </div>
  );
}
