import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Storage from './pages/Storage/Storage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: "/authentication",
      element: <Authentication />
    }, 
    {
      path: "/database",
      element: <Database />
    }, 
    {
      path: "/functions",
      element: <Functions />
    }, 
    {
      path: "/hosting",
      element: <Hosting />
    }, 
    {
      path: "/machine-learning",
      element: <MachineLearning />
    }, 
    {
      path: "/storage",
      element: <Storage />
    }, 
    ]
  },
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
