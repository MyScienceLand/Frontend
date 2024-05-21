import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar";

const DefaultLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr-6fr]">
        <Sidebar />
        <div>
          <div className="max-w-[1600px] bg-[#F6F7FB] mx-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
