const client = require("./bucketClient");
//surrond in a try-catch block
async function createSignedUploadURL(path, bucketName, expiresIn = 180) {
  const { data, error } = await client.storage
    .from(bucketName)
    .createSignedUploadUrl(path, expiresIn);
  return { data, error };
}
module.exports = createSignedUploadURL;
