import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Mainlayout = () => {
  return (
    <div>
      <Toaster />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
