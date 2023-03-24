import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import "modern-normalize";
import './index.css';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <BrowserRouter>
  // <App />
  // </BrowserRouter>
  // </React.StrictMode>
// );
