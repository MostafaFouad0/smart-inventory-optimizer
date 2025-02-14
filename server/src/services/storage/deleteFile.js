const client = require("./bucketClient");

module.exports = async (path, bucketName) => {
  const { data, error } = await client.storage.from(bucketName).remove([path]);
  return { data, error };
};
