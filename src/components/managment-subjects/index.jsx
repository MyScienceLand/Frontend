import React from "react";

const ManagmentSubject = () => {
  const productData = [
    {
      name: "Apple Watch Series 7",
      category: "Electronics",
      price: 296,
      sold: 22,
      profit: 45,
      details: "sksndsn0",
    },
    {
      name: "Macbook Pro M1",
      category: "Electronics",
      price: 546,
      sold: 12,
      profit: 125,
      details: "sksndsn0",
    },
    {
      name: "Dell Inspiron 15",
      category: "Electronics",
      price: 443,
      sold: 64,
      profit: 247,
      details: "sksndsn0",
    },
    {
      name: "HP Probook 450",
      category: "Electronics",
      price: 499,
      sold: 72,
      profit: 103,
      details: "sksndsn0",
    },
  ];
  return (
    <>
      <h1 className="text-[#000000] text-[26px] font-medium">
        List Of Teachers
      </h1>
      <div className="rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-6 py-4.5 px-4 bg-primary sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-2 py-6 flex items-center">
            <p className="font-medium text-white">#</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium text-white">Topic 1</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium text-white">Topic 2</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium text-white">Topic 3</p>
          </div>
        </div>
        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex border-r border-[#AFAFAF] py-6 items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <p className="text-sm text-meta-3">${product.profit}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 border-r border-[#AFAFAF] hidden items-center sm:flex">
              <p className="text-sm text-black ">{product.category}</p>
            </div>
            <div className="col-span-2 border-r 
            ] border-[#AFAFAF] flex items-center">
              <p className="text-sm text-black ">${product.price}</p>
            </div>
            <div className="col-span-2 border-r border-[#AFAFAF] text-center flex items-center">
              <p className="text-sm text-black ">{product.sold}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManagmentSubject;
