import React from "react";
import BarChart from "../common/barchart";

const ManagmentDashboard = () => {
  return (
    <>
      <div className="flex justify-end gap-2 items-center">
        <button className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
          Create Class
        </button>
        <button className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary ">
          Create User
        </button>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-6">
        <div>
          <BarChart
            series={[
              {
                name: "Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
              },
            ]}
            colors="#5E196C"
            heading={"Year 1"}
          />
        </div>
        <div>
          <BarChart
            series={[
              {
                name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
              },
            ]}
            colors="#006C8D"
            heading={"Year 2"}
          />
        </div>
      </div>
    </>
  );
};

export default ManagmentDashboard;
