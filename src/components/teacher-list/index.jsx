import React from "react";

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

const TeacherList = () => {
  return (
    <>
      <h1 className="text-[#000000] text-[26px] font-medium">
        List Of Teachers
      </h1>
      <div className="rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-6 py-4.5 px-4  sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1.5 py-6 flex items-center">
            <p className="font-medium text-primary">#</p>
          </div>
          <div className="col-span-1.5 hidden items-center sm:flex">
            <p className="font-medium text-primary">Name</p>
          </div>
          <div className="col-span-1.5 flex items-center">
            <p className="font-medium text-primary">Price</p>
          </div>
          <div className="col-span-1.5 flex items-center">
            <p className="font-medium text-primary">Subject</p>
          </div>
          <div className="col-span-1.5 flex items-center">
            <p className="font-medium text-primary">Email</p>
          </div>
          <div className="col-span-1.5 flex items-center">
            <p className="font-medium text-primary">Class Details</p>
          </div>
        </div>
        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-[#AFAFAF] py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1.5 flex py-6 items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={product.image} alt="Product" />
                </div>
              </div>
            </div>
            <div className="col-span-1.5 hidden items-center sm:flex">
              <p className="text-sm text-black ">{product.category}</p>
            </div>
            <div className="col-span-1.5 flex items-center">
              <p className="text-sm text-black ">${product.price}</p>
            </div>
            <div className="col-span-1.5 flex items-center">
              <p className="text-sm text-black ">{product.sold}</p>
            </div>
            <div className="col-span-1.5 flex items-center">
              <p className="text-sm text-meta-3">${product.profit}</p>
            </div>
            <div className="col-span-1.5 flex items-center">
              <button className="bg-transparent rounded-sm border border-[#5E196C]   text-primary hover:bg-primary hover:text-white px-6 py-1">
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeacherList;
