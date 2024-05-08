import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import AdminDashboard from "../pages/AdminDashboard";
import ShowData from "../pages/ShowData";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog-details/:slug",
        element: <BlogDetails />,
      },
      {
        path: "/admin/login",
        element: <SignIn />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/student-data/:blogId",
        element: <ShowData />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default route;
