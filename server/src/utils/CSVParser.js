const downloadFile = require("../services/storage/downloadFile");
const { Readable } = require("stream");

const readCSV = async (bucketName, path) => {
  const { data, error } = await downloadFile(path, bucketName);
  if (error) throw error;

  const csvText = await data.text();
  const readableStream = Readable.from(csvText);
  return readableStream;
};

module.exports = readCSV;
