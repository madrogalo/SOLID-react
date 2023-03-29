import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/root';
import SingleResponsibilityPrinciple from './routes/single-responsibility-principle';
import OpenClosedPrinciple from './routes/open-closed-principle';
import LiskovSubstitutionPrinciple from './routes/liskov-substitution-principle';
import InterfaceSegregationPrinciple from './routes/interface-segregation-principle';
import DependencyInversionPrinciple from './routes/dependency-inversion-principle';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/single-responsibility-principle",
    element: <SingleResponsibilityPrinciple />,
  },
  {
    path: "/open-closed-principle",
    element: <OpenClosedPrinciple />,
  },
  {
    path: "/liskov-substitution-principle",
    element: <LiskovSubstitutionPrinciple />,
  },
  {
    path: "/interface-segregation-principle",
    element: <InterfaceSegregationPrinciple />,
  },
  {
    path: "/dependency-inversion-principle",
    element: <DependencyInversionPrinciple />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
