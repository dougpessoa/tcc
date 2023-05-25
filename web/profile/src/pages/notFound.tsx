import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <React.Fragment>
      <div>Not found</div>
      <Link to="/">Go back</Link>
    </React.Fragment>
  );
}