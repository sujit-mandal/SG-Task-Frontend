import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Route/Route.jsx";
import Blogprovider from "./Provider/Blogprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Blogprovider>
      <RouterProvider router={route} />
    </Blogprovider>
  </React.StrictMode>
);
