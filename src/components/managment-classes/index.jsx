import React from "react";
import ManagmentTable from "../common/managmentTable";

const ManagmentClasses = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-6">
      <div>
        {" "}
        <div>
          <ManagmentTable heading={"Class 1"} />
          <div className="flex justify-center items-center">
            <button className="px-8 py-2 bg-primary rounded-sm mt-4 text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
              View All
            </button>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div>
          <ManagmentTable heading={"Class 2"} />
          <div className="flex justify-center items-center">
            <button className="px-8 py-2 bg-primary rounded-sm mt-4 text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
              View All
            </button>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div>
          <ManagmentTable heading={"Class 3"} />
          <div className="flex justify-center items-center">
            <button className="px-8 py-2 bg-primary rounded-sm mt-4 text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
              View All
            </button>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div>
          <ManagmentTable heading={"Class 4"} />
          <div className="flex justify-center items-center">
            <button className="px-8 py-2 bg-primary rounded-sm mt-4 text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
              View More
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ManagmentClasses;
