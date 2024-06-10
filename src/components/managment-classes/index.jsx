import React from "react";
import ManagmentTable from "../common/managmentTable";

const ManagmentClasses = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4">
      <div>
        {" "}
        <div className="flex flex-col  justify-center items-center">
          <ManagmentTable />

          <button className="bg-primary mt-5 text-white px-6 py-2 ">
            View All
          </button>
        </div>
      </div>
      <div>
        {" "}
        <div className="flex flex-col  justify-center items-center">
          <ManagmentTable />

          <button className="bg-primary mt-5 text-white px-6 py-2 ">
            View All
          </button>
        </div>
      </div>
      <div>
        {" "}
        <div className="flex flex-col  justify-center items-center">
          <ManagmentTable />

          <button className="bg-primary mt-5 text-white px-6 py-2 ">
            View All
          </button>
        </div>
      </div>
      <div>
        {" "}
        <div className="flex flex-col  justify-center items-center">
          <ManagmentTable />

          <button className="bg-primary mt-5 text-white px-6 py-2 ">
            View All
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default ManagmentClasses;
