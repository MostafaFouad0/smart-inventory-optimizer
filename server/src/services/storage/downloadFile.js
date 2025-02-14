async function downloadFile(path, bucketName) {
  const { data, error } = await client.storage.from(bucketName).download(path);
}
module.exports = downloadFile;
