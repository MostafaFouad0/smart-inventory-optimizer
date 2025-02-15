const csv = require("csv-parser");
const winston = require("winston");
const purchasesSchema = require("./purchasesJoiSchema");

/*
 This function reads a CSV file and validates each row against the purchasesSchema.
*/
const validatePurchases = async (readableStream, options) => {
  const badRows = [];
  const goodRows = [];
  rowNumber = 0;
  for await (const row of readableStream.pipe(csv())) {
    rowNumber++;
    try {
      await purchasesSchema.validateAsync(row, options);
      goodRows.push({ rowNumber: rowNumber, data: row });
    } catch (err) {
      badRows.push({
        rowNumber: rowNumber,
        error: err.details[0].message,
      });
      winston.debug(err);
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

module.exports = validatePurchases;
