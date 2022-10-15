import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstLesson from './firstLesson/components/FirstLesson/FirstLesson';
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirstLesson />
  </React.StrictMode>
);

