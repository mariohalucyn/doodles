import * as React from 'react';

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}

export default NotFoundPage;

export function Head() {
  return <title>Not found</title>;
}
