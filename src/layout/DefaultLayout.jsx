import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar";

const DefaultLayout = () => {
  return (
    <>
      <div className="">
        <div>
          <Sidebar />
        </div>
        <div className=" ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
