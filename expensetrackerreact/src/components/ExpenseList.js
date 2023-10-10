import React from "react";

export const ExpenseList = () => {
  return (
    <>
      <div className="flex mt-3 p-5 shadow-xl gap-1    m-auto  flex-wrap justify-center max-w-fit  rounded-2xl ">
        <div className=" flex px-4 py-8 bg-white md:text-2xl rounded-tl-2xl rounded-bl-2xl  ">
          <p>amount</p>
        </div>
        <div className=" flex px-4 py-8 bg-white border-none outline-none md:text-2xl  ">
          <p>category</p>
        </div>
        <div className=" flex px-4 py-8 bg-white border-none outline-none md:text-2xl ">
          <p>description</p>
        </div>
        <div className=" flex px-4 py-8 bg-white border-none outline-none md:text-2xl  ">
          <p>Date</p>
        </div>
        <div className=" flex px-4 py-8 text-white rounded-2xl bg-slate-800 border-none outline-none md:text-2xl  ">
          <button>Edit</button>
        </div>
        <div className=" flex px-4 py-8 text-white bg-red-700 border-none outline-none md:text-2xl rounded-2xl ">
          <button>DELETE</button>
        </div>
      </div>
    </>
  );
};
