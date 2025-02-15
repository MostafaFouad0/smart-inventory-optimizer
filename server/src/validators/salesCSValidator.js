const csv = require("csv-parser");
const salesSchema = require("./salesJoiSchema");

/*
 This function reads a CSV file and validates each row against the salesSchema.
*/
const validateSales = async (readableStream, options) => {
  const badRows = [];
  const goodRows = [];
  let rowNumber = 0;
  for await (const row of readableStream.pipe(csv())) {
    rowNumber++;
    try {
      await salesSchema.validateAsync(row, options); //TODO: implement this function and check if it has to be async and needs these params
      goodRows.push({ rowNumber: rowNumber, data: row });
    } catch (err) {
      badRows.push({
        rowNumber: rowNumber,
        error: err.details[0].message,
      });
    }
  }

  return {
    info: {
      totalRows: rowNumber,
      goodRowsCount: goodRows.length,
      badRowsCount: badRows.length,
    },
    goodRows,
    badRows,
  };
};

module.exports = validateSales;
