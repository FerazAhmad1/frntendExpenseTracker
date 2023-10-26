import React from "react";
import { Button } from "./Button";
import { useSelector } from "react-redux";

export const Pagebutton = () => {
  const totalPages = useSelector((state) => state.expense.totalPages);

  return (
    <>
      {console.log("pageButton", totalPages)}
      <Button totalPages={totalPages} />
    </>
  );
};
