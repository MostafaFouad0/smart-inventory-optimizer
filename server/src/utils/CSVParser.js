const client = require("../services/storage/bucketClient");
const { Readable } = require("stream");

const readCSV = async (bucketName, path) => {
  const { data, error } = await client.storage.from(bucketName).download(path);
  if (error) throw error;

  const csvText = await data.text();
  const readableStream = Readable.from(csvText);
  return readableStream;
};

module.exports = readCSV;
