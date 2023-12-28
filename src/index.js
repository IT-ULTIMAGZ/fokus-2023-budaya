import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/page5/Page5';
import Home from './pages/Rubrik7/Home';
import MuaraTakus from './pages/page5/components/MuaraTakus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Rubrik4",
    element: <Page4 />
  },
  {
    path: "Rubrik5",
    element: <MuaraTakus />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
