import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Button = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState();

  const limitHandler = (e) => {
    console.log(
      typeof e,
      e.target.value,
      "sssssssssssssssssssssssssssssssssss"
    );
    const limit = e.target.value * 1;
    const page = searchParams.get("page");
    if (page) {
      setSearchParams({ page: page * 1, limit: limit * 1 });
      setState(limit);
    } else {
      setSearchParams({ page: 1, limit: limit * 1 });
      setState(limit);
    }
  };
  const clickHandler = (i) => {
    console.log(i);
    const limit = searchParams.get("limit");
    if (searchParams.get("limit")) {
      setSearchParams({ page: i, limit });
      setState(limit);
    } else {
      setSearchParams({ page: i, limit: 5 });
      setState(5);
    }
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
  const limits = [5, 10, 15, 20];

  return (
    <div>
      <select defaultValue={5} onChange={limitHandler}>
        {limits.map((limit) => (
          <option>{limit}</option>
        ))}
      </select>

      {button}
    </div>
  );
};
