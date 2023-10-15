import { saveAs } from "file-saver";
import React from "react";

const generateExcelFile = (data, filename) => {
  // Convert the data to a Blob object.
  const blob = new Blob([JSON.stringify(data)], {
    type: "application/vnd.ms-excel",
  });

  // Save the Blob object as an Excel file.
  saveAs(blob, filename);
};

export const GenerateExcelfile = ({ data, filename }) => {
  const handleClick = () => {
    generateExcelFile(data, filename);
  };

  return (
    <button className="bg-blue-800 text-white p-4 " onClick={handleClick}>
      Download as Excel
    </button>
  );
};
