const client = require("./bucketClient");
//surrond in a try-catch block
async function createSignedURL(path, expiresIn = 180) {
  const { data, error } = await client.storage
    .from("ProfileImage")
    .createSignedUrl(path, expiresIn);
  return { data, error };
}
module.exports = createSignedURL;
