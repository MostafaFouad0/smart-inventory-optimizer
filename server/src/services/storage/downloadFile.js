const client = require("./bucketClient");

async function downloadFile(path, bucketName) {
  const { data, error } = await client.storage.from(bucketName).download(path);
  return { data, error };
}
module.exports = downloadFile;
