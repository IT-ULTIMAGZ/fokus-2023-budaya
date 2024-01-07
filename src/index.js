import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/page5/Page5';
import Page_6 from './pages/page6/Page6';
import Home from './pages/Rubrik7/Home';
import LandscapePrompt from './pages/landscapePrompt/LndscapePrompt';
// import MuaraTakus from './pages/page5/components/MuaraTakus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  {
    path: "Budaya-Bangsa-Yang-Tidak-Lekang-Oleh-Waktu",
    element: <Page4 />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  { 
    path: "Seberapa-Dekat-Ultimates-Dengan-Sejarah",
    element: <Page1 />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  {
    path:"Lihat-Semangat-5-Pelestari",
    element: <Page3 />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  {
    path: "Telisik-5-Warisan-Budaya",
    element: <Page_6 />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  {
    path: "Warisan-Agung-nan-Luhur-Nusantara",
    element: <Page2 />,
    errorElement: <div>Error 404 Page Not Found</div>
  },
  {
    path: "Tengok-Ragam-Budaya-Unik-Indonesia",
    element: <Page5 />,
    errorElement: <div>Error 404 Page Not Found</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <LandscapePrompt />
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
