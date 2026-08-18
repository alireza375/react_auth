import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; // Use "react-router-dom" if on v6
import './index.css';
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import Jobs from "./components/Jobs/Jobs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Register />
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('/jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);