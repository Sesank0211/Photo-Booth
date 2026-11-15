import React from 'react';
import './Loader.css';

export default function Loader({ label = 'Loading photos…' }) {
  return <div className="loader" role="status"><span className="loader-spinner" aria-hidden="true" /><span>{label}</span></div>;
}
