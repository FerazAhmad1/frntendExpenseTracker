import React from "react";

export const ExpenseForm = () => {
  return (
    <>
      <form className="flex flex-col md:flex-row md:justify-between md:items-center md:p-4 md:bg-blue-700 md:min-w-max gap-2 mt-2 justify-center items-center">
        <div className="flex flex-col bg-white p-1 rounded-lg shadow-2xl w-80 mb-1 md:text-2xl ">
          <label>Money</label>
          <input className=" border-none outline-none " type="text" />
        </div>
        <div className="flex flex-col bg-white p-1 rounded-lg shadow-2xl w-80 mb-1 md:text-2xl ">
          <label>Description</label>
          <input className=" border-none outline-none " type="text" />
        </div>
        <div className="flex flex-col w-80  h-14 shadow-2xl mb-1 md:text-2xl md:max-h-fit ">
          <select className="flex-1 rounded-lg outline-none md:h-16  ">
            <option>Milk</option>
            <option>Bread</option>
            <option>Vegitables</option>
            <option>Burger</option>
            <option>Piza</option>
            <option>Beer</option>
            <option>Dineer</option>
            <option>Lunch</option>
            <option>Break fast</option>
          </select>
        </div>

        <div className=" flex bg-green-600 outline-none  h-14  text-white justify-center items-center w-80 rounded-lg shadow-2xl mb-1 md:text-2xl md:h-16">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};
