const client = require("./bucketClient");

module.exports = async (path) => {
  const { data, error } = await client.storage
    .from("ProfileImage")
    .remove([path]);
  return { data, error };
};
