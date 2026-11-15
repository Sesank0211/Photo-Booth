import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>Try again</button>
    </div>
  );
}
