import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home Components/Home";
import Watchlist from "./Watchlist Components/Watchlist";
import Navbar from "./Navbar";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MoviePage from "./Movie Page Components/MoviePage";

const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MoviePage />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
