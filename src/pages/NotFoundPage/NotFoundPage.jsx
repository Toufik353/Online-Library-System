import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
