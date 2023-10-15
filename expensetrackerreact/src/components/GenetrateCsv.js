import React from "react";
import { CSVLink } from "react-csv";

export const GenetrateCsv = ({ data, filename }) => {
  const generateCSVFile = (data, filename) => {
    const csvData = data.map((row) => Object.values(row));

    return (
      <CSVLink
        data={csvData}
        headers={Object.keys(data[0])}
        filename={filename}>
        Download as CSV
      </CSVLink>
    );
  };
  return <div>{generateCSVFile(data, filename)}</div>;
};
