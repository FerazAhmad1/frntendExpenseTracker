import React from "react";
import { useSearchParams } from "react-router-dom";
export const Button = ({ totalPages, limit }) => {
  console.log(totalPages, limit);
  const [searchParams, setSearchParams] = useSearchParams();
  const clickHandler = (i) => {
    console.log(i);
    setSearchParams({ page: i, limit });
  };
  let button = [];
  for (let i = 1; i <= totalPages; i++) {
    button.push(
      <button
        className="bg-blue-800 p-4 ml-4 text-white "
        onClick={(e) => {
          clickHandler(i);
        }}>
        {i !== totalPages ? i : "lastpage"}
      </button>
    );
  }
  console.log(button);
  return button;
};
