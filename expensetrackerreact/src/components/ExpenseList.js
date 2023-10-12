import React from "react";

export const ExpenseList = ({
  amount,
  description,
  category,
  createdAt,
  id,
  editHandler,
  deleteHandler,
}) => {
  const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  return (
    <>
      <div className="flex mt-3 p-5 shadow-xl gap-1    m-auto  flex-wrap  max-w-fit  rounded-2xl ">
        <div className=" flex px-1 py-2 bg-white md:text-2xl rounded-tl-2xl rounded-bl-2xl  ">
          <p>{amount}</p>
        </div>
        <div className=" flex px-1 py-2 bg-white border-none outline-none md:text-2xl  ">
          <p>{category}</p>
        </div>
        <div className=" flex px-1 py-2 bg-white border-none outline-none md:text-2xl ">
          <p>{description}</p>
        </div>
        <div className=" flex px-1 py-2 bg-white border-none outline-none md:text-2xl  ">
          <p>{dateFormatter(createdAt)}</p>
        </div>
        <div className=" flex px-1 py-2 text-white rounded-2xl bg-slate-800 border-none outline-none md:text-2xl  ">
          <button onClick={(e) => editHandler(id)}>Edit</button>
        </div>
        <div className=" flex px-1 py-2 text-white bg-red-700 border-none outline-none md:text-2xl rounded-2xl ">
          <button onClick={(e) => deleteHandler(id)}>DELETE</button>
        </div>
      </div>
    </>
  );
};
