import React from "react";
import { useSelector } from "react-redux";
import { LeaderBoard } from "./LeaderBoard";
import { GenetrateCsv } from "./GenetrateCsv";
import { GenerateExcelfile } from "./GenerateExcelfile";

export const Report = () => {
  const expense = useSelector((state) => state.expense.data);

  const tableHeader = ["NO.", "Date", "Description", "Category", "Expense"];
  console.log(expense);
  const data = expense.map((obj) => {
    const date = obj.createdAt.split("T")[0];
    let amount = obj.amount;

    const description = obj.description;
    const category = obj.category;

    return {
      date,
      amount,
      description,
      category,
    };
  });
  const properties = ["date", "description", "category", "amount"];
  const downloadHandler = () => {};
  return (
    <>
      <div className="flex justify-end mt-3 ">
        <GenerateExcelfile data={data} filename="my-excel-file.xlsx">
          Download as excel file
        </GenerateExcelfile>
      </div>
      <LeaderBoard
        properties={properties}
        tableHeader={tableHeader}
        data={data}
      />
    </>
  );
};
