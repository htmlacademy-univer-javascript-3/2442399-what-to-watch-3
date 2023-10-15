import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App title="The Grand Budapest Hotel poster" genre="Drama" releaseDate={2014}/>
  </React.StrictMode>
);
