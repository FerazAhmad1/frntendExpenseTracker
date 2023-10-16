import React from "react";
import { Button } from "./Button";
import { useSelector } from "react-redux";

export const Pagebutton = () => {
  const totalPages = useSelector((state) => state.expense.totalPages);
  const limit = 3;
  return (
    <>
      <Button totalPages={totalPages} limit={limit} />
    </>
  );
};
